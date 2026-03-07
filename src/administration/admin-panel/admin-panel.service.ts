import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';
import { Company } from '../../users/company/entities/company.entity';
import { Trips } from '../../transport/trips/entities/trip.entity';
import { RestaurantOrder } from '../../cart/entities/restaurant-order.entity';
import { Administrators } from '../administrators/entities/administrator.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdminPanelService {
  constructor(
    @InjectRepository(RegisterUser)
    private readonly userRepo: Repository<RegisterUser>,
    @InjectRepository(RegisterDriver)
    private readonly driverRepo: Repository<RegisterDriver>,
    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
    @InjectRepository(Trips)
    private readonly tripRepo: Repository<Trips>,
    @InjectRepository(RestaurantOrder)
    private readonly orderRepo: Repository<RestaurantOrder>,
    @InjectRepository(Administrators)
    private readonly adminRepo: Repository<Administrators>,
  ) {}

  // ─── Dashboard ───────────────────────────────────────────────────────────────
  // Statistiques globales pour le tableau de bord admin

  async getDashboardStats(): Promise<{
    riders: number;
    drivers: number;
    companies: number;
    activeTrips: number;
    restaurantOrders: number;
  }> {
    const [riders, drivers, companies, activeTrips, restaurantOrders] = await Promise.all([
      this.userRepo.count({ where: { eStatus: 'Active' } as any }),
      this.driverRepo.count({ where: { eStatus: 'active' } as any }),
      this.companyRepo.count({ where: { eStatus: 'Active' } as any }),
      this.tripRepo
        .createQueryBuilder('t')
        .where('t.iActive IN (:...s)', { s: ['Active', 'On Going Trip', 'Arrived'] })
        .getCount(),
      this.orderRepo.count(),
    ]);
    return { riders, drivers, companies, activeTrips, restaurantOrders };
  }

  // ─── Gestion Riders ──────────────────────────────────────────────────────────
  // Liste paginée des riders avec filtre statut/email/téléphone

  async listRiders(page = 1, limit = 20, search?: string, status?: string) {
    const qb = this.userRepo
      .createQueryBuilder('u')
      .select(['u.iUserId', 'u.vName', 'u.vLastName', 'u.vEmail', 'u.vPhone', 'u.eStatus', 'u.iCompanyId'])
      .orderBy('u.iUserId', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    if (search) {
      qb.andWhere('(u.vEmail LIKE :s OR u.vPhone LIKE :s OR u.vName LIKE :s)', {
        s: `%${search}%`,
      });
    }
    if (status) {
      qb.andWhere('u.eStatus = :status', { status });
    }

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, limit };
  }

  async updateRiderStatus(userId: number, status: 'Active' | 'Inactive' | 'Deleted') {
    const result = await this.userRepo.update({ iUserId: userId } as any, { eStatus: status } as any);
    if (!result.affected) throw new NotFoundException(`Rider #${userId} introuvable`);
    return { updated: true, status };
  }

  // ─── Gestion Drivers ─────────────────────────────────────────────────────────
  // Liste paginée + approbation/suspension/suppression

  async listDrivers(page = 1, limit = 20, search?: string, status?: string, companyId?: number) {
    const qb = this.driverRepo
      .createQueryBuilder('d')
      .select([
        'd.iDriverId', 'd.vName', 'd.vLastName', 'd.vEmail', 'd.vPhone',
        'd.eStatus', 'd.iCompanyId', 'd.vAvgRating', 'd.vImage',
      ])
      .orderBy('d.iDriverId', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    if (search) {
      qb.andWhere('(d.vEmail LIKE :s OR d.vPhone LIKE :s OR d.vName LIKE :s)', {
        s: `%${search}%`,
      });
    }
    if (status) {
      qb.andWhere('d.eStatus = :status', { status });
    }
    if (companyId) {
      qb.andWhere('d.iCompanyId = :companyId', { companyId });
    }

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, limit };
  }

  async updateDriverStatus(driverId: number, status: 'active' | 'inactive' | 'Deleted' | 'Suspend') {
    const result = await this.driverRepo.update({ iDriverId: driverId } as any, { eStatus: status } as any);
    if (!result.affected) throw new NotFoundException(`Driver #${driverId} introuvable`);
    return { updated: true, status };
  }

  // ─── Gestion Companies ───────────────────────────────────────────────────────

  async listCompanies(page = 1, limit = 20, search?: string, status?: string) {
    const qb = this.companyRepo
      .createQueryBuilder('c')
      .select(['c.iCompanyId', 'c.vCompany', 'c.vName', 'c.vEmail', 'c.vPhone', 'c.eStatus', 'c.eSystem'])
      .orderBy('c.iCompanyId', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    if (search) {
      qb.andWhere('(c.vEmail LIKE :s OR c.vCompany LIKE :s)', { s: `%${search}%` });
    }
    if (status) {
      qb.andWhere('c.eStatus = :status', { status });
    }

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, limit };
  }

  async updateCompanyStatus(companyId: number, status: 'Active' | 'Inactive' | 'Deleted') {
    const result = await this.companyRepo.update({ iCompanyId: companyId } as any, { eStatus: status } as any);
    if (!result.affected) throw new NotFoundException(`Company #${companyId} introuvable`);
    return { updated: true, status };
  }

  // ─── Gestion Commandes Restaurant ────────────────────────────────────────────

  async listOrders(page = 1, limit = 20, companyId?: number, statusCode?: number) {
    const qb = this.orderRepo
      .createQueryBuilder('o')
      .select([
        'o.iOrderId', 'o.iUserId', 'o.iCompanyId', 'o.vOrderNo',
        'o.iStatusCode', 'o.fFinalTotal', 'o.ePaymentOption', 'o.eTakeAway',
      ])
      .orderBy('o.iOrderId', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    if (companyId) {
      qb.andWhere('o.iCompanyId = :companyId', { companyId });
    }
    if (statusCode !== undefined) {
      qb.andWhere('o.iStatusCode = :sc', { sc: statusCode });
    }

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, limit };
  }

  async updateOrderStatus(orderId: number, statusCode: number) {
    const result = await this.orderRepo.update({ iOrderId: orderId } as any, { iStatusCode: statusCode } as any);
    if (!result.affected) throw new NotFoundException(`Commande #${orderId} introuvable`);
    return { updated: true, statusCode };
  }

  // ─── Gestion Trips (Transport) ───────────────────────────────────────────────

  async listTrips(page = 1, limit = 20, status?: string, companyId?: number) {
    const qb = this.tripRepo
      .createQueryBuilder('t')
      .select([
        't.iTripId', 't.iUserId', 't.iDriverId', 't.iCompanyId', 't.iActive',
        't.iFare', 't.fDistance', 't.eType', 't.tTripRequestDate',
      ])
      .orderBy('t.iTripId', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    if (status) {
      qb.andWhere('t.iActive = :status', { status });
    }
    if (companyId) {
      qb.andWhere('t.iCompanyId = :companyId', { companyId });
    }

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, limit };
  }

  // ─── Gestion Administrateurs ─────────────────────────────────────────────────

  async listAdmins() {
    return this.adminRepo.find({
      select: ['iAdminId', 'vFirstName', 'vLastName', 'vEmail', 'iGroupId', 'eStatus'] as any,
      where: { eStatus: 'Active' },
      order: { iAdminId: 'ASC' },
    });
  }

  async createAdmin(data: {
    vFirstName: string;
    vLastName: string;
    vEmail: string;
    password: string;
    iGroupId?: number;
  }): Promise<{ iAdminId: number; vEmail: string }> {
    const hashed = await bcrypt.hash(data.password, 10);
    const admin = this.adminRepo.create({
      vFirstName: data.vFirstName,
      vLastName: data.vLastName,
      vEmail: data.vEmail,
      vPassword: hashed,
      iGroupId: data.iGroupId ?? 1,
      eStatus: 'Active',
    } as any);
    const saved = await this.adminRepo.save(admin);
    return { iAdminId: (saved as any).iAdminId, vEmail: (saved as any).vEmail };
  }

  async updateAdminStatus(adminId: number, status: 'Active' | 'Inactive' | 'Deleted') {
    const result = await this.adminRepo.update({ iAdminId: adminId } as any, { eStatus: status } as any);
    if (!result.affected) throw new NotFoundException(`Admin #${adminId} introuvable`);
    return { updated: true, status };
  }
}
