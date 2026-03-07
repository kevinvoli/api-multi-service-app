import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CabBooking } from './entities/cab-booking.entity';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';

@Injectable()
export class CabBookingService {
  constructor(
    @InjectRepository(CabBooking)
    private readonly repository: Repository<CabBooking>,
    @InjectRepository(RegisterUser)
    private readonly userRepo: Repository<RegisterUser>,
    @InjectRepository(RegisterDriver)
    private readonly driverRepo: Repository<RegisterDriver>,
  ) {}

  // ─── Créer une réservation (Manuel Dispatch) ─────────────────────────────────
  // Remplace : action_booking.php

  async create(dto: CreateCabBookingDto): Promise<CabBooking> {
    let userId = dto.iUserId;

    // Si pas d'userId fourni, chercher ou créer le passager par email
    if (!userId && dto.vEmail) {
      const existing = await this.userRepo.findOneBy({ vEmail: dto.vEmail } as any);
      if (existing) {
        userId = existing.iUserId;
      } else if (dto.vName && dto.vPhone) {
        // Créer un nouveau passager (status Inactive par défaut)
        const newUser = this.userRepo.create({
          vName: dto.vName,
          vLastName: dto.vLastName || '',
          vEmail: dto.vEmail,
          vPhone: dto.vPhone,
          vCountry: dto.vCountry || '',
          eStatus: 'Inactive',
        } as any);
        const saved = await this.userRepo.save(newUser) as any;
        userId = saved.iUserId;
      }
    }

    if (!userId || !dto.vSourceAddresss) {
      throw new BadRequestException('Informations de réservation incomplètes (userId ou adresse source manquante)');
    }

    const bookingNo = String(Math.floor(Math.random() * 90000000) + 10000000);
    const distanceKm = dto.vDistance ? Math.round(dto.vDistance / 1000) : 0;
    const durationMin = dto.vDuration ? Math.round(dto.vDuration / 60) : 0;

    const booking = this.repository.create({
      iUserId: userId,
      iDriverId: dto.iDriverId || 0,
      vSourceLatitude: dto.vSourceLatitude,
      vSourceLongitude: dto.vSourceLongitude,
      vDestLatitude: dto.vDestLatitude,
      vDestLongitude: dto.vDestLongitude,
      vSourceAddresss: dto.vSourceAddresss,
      tDestAddress: dto.tDestAddress,
      vDistance: String(distanceKm),
      vDuration: String(durationMin),
      iCompanyId: dto.iCompanyId || 0,
      dBookingDate: dto.dBookingDate ? new Date(dto.dBookingDate) : new Date(),
      eAutoAssign: dto.eAutoAssign || 'No',
      eStatus: 'Assign',
      eFemaleDriverRequest: dto.eFemaleDriverRequest || 'No',
      eHandiCapAccessibility: dto.eHandiCapAccessibility || 'No',
      eBookingFrom: dto.eBookingFrom || 'Admin',
      iVehicleTypeId: dto.iVehicleTypeId,
      vBookingNo: bookingNo,
    } as any);

    return this.repository.save(booking) as any;
  }

  // ─── Assigner un chauffeur à une réservation ─────────────────────────────────
  // Remplace : ajax_assign_driver_cabbooking.php

  async assignDriver(bookingId: number, driverId: number): Promise<CabBooking> {
    const booking = await this.findOne(bookingId);
    const driver = await this.driverRepo.findOneBy({ iDriverId: driverId } as any);
    if (!driver) throw new NotFoundException(`Chauffeur #${driverId} non trouvé`);

    await this.repository.update(bookingId, {
      iDriverId: driverId,
      eAutoAssign: 'No',
      eStatus: 'Assign',
    } as any);

    return this.findOne(bookingId);
  }

  // ─── Liste des chauffeurs disponibles par compagnie ───────────────────────────
  // Remplace : ajax_find_driver.php

  async findDriversByCompany(companyId: number): Promise<Partial<RegisterDriver>[]> {
    const drivers = await this.driverRepo
      .createQueryBuilder('d')
      .select(['d.iDriverId', 'd.vName', 'd.vLastName', 'd.vEmail', 'd.vPhone'])
      .where('d.iCompanyId = :companyId', { companyId })
      .andWhere('d.eStatus != :deleted', { deleted: 'Deleted' })
      .orderBy('d.vName', 'ASC')
      .getMany();
    return drivers;
  }

  // ─── Chercher un passager par numéro de téléphone ────────────────────────────
  // Remplace : ajax_find_rider_by_number.php

  async findRiderByPhone(phone: string): Promise<Partial<RegisterUser> | null> {
    return this.userRepo
      .createQueryBuilder('u')
      .select(['u.iUserId', 'u.vName', 'u.vLastName', 'u.vEmail', 'u.vPhone'])
      .where('u.vPhone = :phone', { phone })
      .andWhere('u.eStatus != :deleted', { deleted: 'Deleted' })
      .getOne();
  }

  // ─── Liste des réservations avec filtres ─────────────────────────────────────

  async findAll(filters?: { companyId?: number; status?: string; driverId?: number }): Promise<CabBooking[]> {
    const qb = this.repository.createQueryBuilder('b').orderBy('b.iCabBookingId', 'DESC');
    if (filters?.companyId) qb.andWhere('b.iCompanyId = :cid', { cid: filters.companyId });
    if (filters?.status) qb.andWhere('b.eStatus = :status', { status: filters.status });
    if (filters?.driverId) qb.andWhere('b.iDriverId = :did', { did: filters.driverId });
    return qb.getMany() as any;
  }

  async findOne(id: number): Promise<CabBooking> {
    const entity = await this.repository.findOneBy({ iCabBookingId: id } as any);
    if (!entity) throw new NotFoundException(`Réservation #${id} non trouvée`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCabBookingDto): Promise<CabBooking> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  // ─── Annuler une réservation ──────────────────────────────────────────────────

  async cancel(id: number, cancelBy: 'Driver' | 'Rider' | 'Admin'): Promise<CabBooking> {
    await this.repository.update(id, { eStatus: 'Cancel', eCancelBy: cancelBy } as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
