import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';
import { Company } from '../../users/company/entities/company.entity';
import { Trips } from '../../transport/trips/entities/trip.entity';
import { RestaurantOrder } from '../../cart/entities/restaurant-order.entity';
import { Administrators } from '../administrators/entities/administrator.entity';
import { CabBooking } from '../../transport/cab-booking/entities/cab-booking.entity';
import { DocumentList } from '../../users/document-list/entities/document-list.entity';
import { UserWallet } from '../../payments/user-wallet/entities/user-wallet.entity';
import { Coupon } from '../../payments/coupon/entities/coupon.entity';
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
    @InjectRepository(CabBooking)
    private readonly cabBookingRepo: Repository<CabBooking>,
    @InjectRepository(DocumentList)
    private readonly documentRepo: Repository<DocumentList>,
    @InjectRepository(UserWallet)
    private readonly walletRepo: Repository<UserWallet>,
    @InjectRepository(Coupon)
    private readonly couponRepo: Repository<Coupon>,
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

  // ─── Détail Rider ─────────────────────────────────────────────────────────────
  // Remplace : ajax_rider_details.php

  async getRiderDetail(userId: number) {
    const user = await this.userRepo
      .createQueryBuilder('u')
      .select([
        'u.iUserId', 'u.vName', 'u.vLastName', 'u.vEmail', 'u.vPhone', 'u.vPhoneCode',
        'u.vImgName', 'u.eStatus', 'u.eSignUpType', 'u.vAvgRating', 'u.vRefCode',
        'u.tRegistrationDate', 'u.eEmailVerified', 'u.ePhoneVerified', 'u.eGender',
        'u.vCountry', 'u.vState', 'u.iCompanyId',
      ])
      .where('u.iUserId = :id', { id: userId })
      .getOne();

    if (!user) throw new NotFoundException(`Rider #${userId} introuvable`);

    const [totalTrips, completedTrips, cancelledTrips] = await Promise.all([
      this.tripRepo.count({ where: { iUserId: userId } as any }),
      this.tripRepo.count({ where: { iUserId: userId, iActive: 'Finished' } as any }),
      this.tripRepo.count({ where: { iUserId: userId, iActive: 'Canceled' } as any }),
    ]);

    return { ...user, trips: { total: totalTrips, completed: completedTrips, cancelled: cancelledTrips } };
  }

  // ─── Détail Driver ────────────────────────────────────────────────────────────
  // Remplace : ajax_driver_details.php

  async getDriverDetail(driverId: number) {
    const driver = await this.driverRepo
      .createQueryBuilder('d')
      .select([
        'd.iDriverId', 'd.vName', 'd.vLastName', 'd.vEmail', 'd.vCode', 'd.vPhone',
        'd.vImage', 'd.eStatus', 'd.vCaddress', 'd.vZip', 'd.vVat',
        'd.tRegistrationDate', 'd.vAvgRating', 'd.vAvgSafetyRating',
        'd.vCountry', 'd.vCity', 'd.vState', 'd.iCompanyId',
      ])
      .where('d.iDriverId = :id', { id: driverId })
      .getOne();

    if (!driver) throw new NotFoundException(`Driver #${driverId} introuvable`);

    const [totalTrips, completedTrips, cancelledTrips] = await Promise.all([
      this.tripRepo.count({ where: { iDriverId: driverId } as any }),
      this.tripRepo.count({ where: { iDriverId: driverId, iActive: 'Finished' } as any }),
      this.tripRepo.count({ where: { iDriverId: driverId, iActive: 'Canceled' } as any }),
    ]);

    const pendingDocs = await this.documentRepo
      .createQueryBuilder('d')
      .where('d.docUsertype = :type', { type: 'driver' })
      .andWhere('d.docUserid = :id', { id: driverId })
      .andWhere('d.reqFile != :empty', { empty: '' })
      .getCount();

    return { ...driver, trips: { total: totalTrips, completed: completedTrips, cancelled: cancelledTrips }, pendingDocsCount: pendingDocs };
  }

  // ─── Recherche Rider par téléphone ────────────────────────────────────────────
  // Remplace : ajax_find_rider_by_number.php (admin)

  async searchRiderByPhone(phone: string, phoneCode?: string) {
    const qb = this.userRepo
      .createQueryBuilder('u')
      .select(['u.iUserId', 'u.vName', 'u.vLastName', 'u.vEmail', 'u.vPhone', 'u.eStatus'])
      .where('u.vPhone = :phone', { phone });

    if (phoneCode) qb.andWhere('u.vPhoneCode = :phoneCode', { phoneCode });

    const user = await qb.getOne();
    return user ? { found: true, user } : { found: false };
  }

  // ─── Drivers par compagnie (dropdown) ────────────────────────────────────────
  // Remplace : ajax_find_driver.php (admin)

  async getDriversByCompany(companyId: number) {
    return this.driverRepo
      .createQueryBuilder('d')
      .select(['d.iDriverId', 'd.vName', 'd.vLastName', 'd.vEmail'])
      .where('d.iCompanyId = :companyId', { companyId })
      .andWhere("d.eStatus != 'Deleted'")
      .orderBy('d.vName', 'ASC')
      .getMany();
  }

  // ─── Assigner chauffeur à une réservation ────────────────────────────────────
  // Remplace : ajax_assign_driver_cabbooking.php

  async assignDriverToBooking(bookingId: number, driverId: number): Promise<{ success: boolean; booking: Partial<CabBooking> }> {
    const result = await this.cabBookingRepo.update(
      { iCabBookingId: bookingId } as any,
      { iDriverId: driverId, eAutoAssign: 'No', eStatus: 'Assign' } as any,
    );
    if (!result.affected) throw new NotFoundException(`Réservation #${bookingId} introuvable`);

    const booking = await this.cabBookingRepo.findOneBy({ iCabBookingId: bookingId } as any);
    return { success: true, booking: booking as any };
  }

  // ─── Approuver documents chauffeur ───────────────────────────────────────────
  // Remplace : ajax_approve_docs.php

  async approveDriverDocs(docIds: number[]): Promise<{ approved: number; message: string }> {
    let approved = 0;
    for (const docId of docIds) {
      const doc = await this.documentRepo.findOneBy({ docId } as any);
      if (doc && doc.reqFile) {
        await this.documentRepo.update(
          { docId } as any,
          { exDate: doc.reqDate, docFile: doc.reqFile, reqDate: '', reqFile: '' } as any,
        );
        approved++;
      }
    }
    return { approved, message: approved > 0 ? 'Documents approuvés avec succès' : 'Aucun document traité' };
  }

  // ─── Stats mensuelles (charts dashboard) ─────────────────────────────────────
  // Remplace : ajax_dashboard.php — Earning_Report + Total_Ride_jobs

  async getDashboardCharts(type: 'earnings' | 'trips', year: number, months = 6) {
    const result: { label: string; value: number; value2?: number }[] = [];

    for (let i = months - 1; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const y = d.getFullYear();
      const m = d.getMonth() + 1;
      const start = `${y}-${String(m).padStart(2, '0')}-01 00:00:00`;
      const end = `${y}-${String(m).padStart(2, '0')}-${new Date(y, m, 0).getDate()} 23:59:59`;
      const label = `${y}-${d.toLocaleString('en', { month: 'short' })}`;

      if (type === 'earnings') {
        const row: any = await this.tripRepo
          .createQueryBuilder('t')
          .select('SUM(t.iFare)', 'total')
          .where('t.tTripRequestDate BETWEEN :start AND :end', { start, end })
          .andWhere("t.iActive = 'Finished'")
          .getRawOne();
        result.push({ label, value: parseFloat(row?.total ?? '0') });
      } else {
        const [finished, cancelled] = await Promise.all([
          this.tripRepo.createQueryBuilder('t')
            .where('t.tTripRequestDate BETWEEN :start AND :end', { start, end })
            .andWhere("t.iActive = 'Finished'").getCount(),
          this.tripRepo.createQueryBuilder('t')
            .where('t.tTripRequestDate BETWEEN :start AND :end', { start, end })
            .andWhere("t.iActive = 'Canceled'").getCount(),
        ]);
        result.push({ label, value: finished, value2: cancelled });
      }
    }

    return { type, year, months, data: result };
  }

  // ─── Solde wallet utilisateur ─────────────────────────────────────────────────
  // Remplace : ajax_get_user_balance.php

  async getUserWalletBalance(userId: number, userType: 'Driver' | 'Rider'): Promise<{ balance: number; userType: string }> {
    const rows = await this.walletRepo
      .createQueryBuilder('w')
      .select([
        `SUM(CASE WHEN w.eType = 'Credit' THEN CAST(w.iBalance AS DECIMAL(15,4)) ELSE 0 END)`,
        `SUM(CASE WHEN w.eType = 'Debit' THEN CAST(w.iBalance AS DECIMAL(15,4)) ELSE 0 END)`,
      ])
      .where('w.iUserId = :userId', { userId })
      .andWhere('w.eUserType = :userType', { userType })
      .getRawOne() as any;

    const credits = parseFloat(rows?.[Object.keys(rows)[0]] ?? '0');
    const debits = parseFloat(rows?.[Object.keys(rows)[1]] ?? '0');
    const balance = Math.round((credits - debits) * 100) / 100;

    return { balance, userType };
  }

  // ─── Vérifier code coupon (unicité) ──────────────────────────────────────────
  // Remplace : ajax_validate_coupon.php

  async checkCouponCode(code: string): Promise<{ exists: boolean; coupon?: Partial<Coupon> }> {
    const coupon = await this.couponRepo
      .createQueryBuilder('c')
      .select(['c.iCouponId', 'c.vCouponCode', 'c.eStatus', 'c.fDiscount', 'c.eType', 'c.dActiveDate', 'c.dExpiryDate'])
      .where('c.vCouponCode = :code', { code })
      .getOne();

    return coupon ? { exists: true, coupon } : { exists: false };
  }
}
