import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminPanelService } from './admin-panel.service';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';
import { Company } from '../../users/company/entities/company.entity';
import { Trips } from '../../transport/trips/entities/trip.entity';
import { RestaurantOrder } from '../../cart/entities/restaurant-order.entity';
import { Administrators } from '../administrators/entities/administrator.entity';

// ─── Mock factory ─────────────────────────────────────────────────────────────

function makeRepo(overrides: any = {}) {
  return {
    count: jest.fn().mockResolvedValue(0),
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockReturnValue({}),
    save: jest.fn().mockImplementation((e) => Promise.resolve({ iAdminId: 99, vEmail: 'new@test.com', ...e })),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    createQueryBuilder: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
      getCount: jest.fn().mockResolvedValue(0),
    }),
    ...overrides,
  };
}

describe('AdminPanelService', () => {
  let service: AdminPanelService;
  let userRepo: any;
  let driverRepo: any;
  let companyRepo: any;
  let tripRepo: any;
  let orderRepo: any;
  let adminRepo: any;

  beforeEach(async () => {
    userRepo = makeRepo();
    driverRepo = makeRepo();
    companyRepo = makeRepo();
    tripRepo = makeRepo();
    orderRepo = makeRepo();
    adminRepo = makeRepo();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminPanelService,
        { provide: getRepositoryToken(RegisterUser), useValue: userRepo },
        { provide: getRepositoryToken(RegisterDriver), useValue: driverRepo },
        { provide: getRepositoryToken(Company), useValue: companyRepo },
        { provide: getRepositoryToken(Trips), useValue: tripRepo },
        { provide: getRepositoryToken(RestaurantOrder), useValue: orderRepo },
        { provide: getRepositoryToken(Administrators), useValue: adminRepo },
      ],
    }).compile();

    service = module.get<AdminPanelService>(AdminPanelService);
  });

  // ─── getDashboardStats ───────────────────────────────────────────────────────

  describe('getDashboardStats', () => {
    it('retourne les compteurs globaux', async () => {
      userRepo.count.mockResolvedValue(50);
      driverRepo.count.mockResolvedValue(20);
      companyRepo.count.mockResolvedValue(5);
      orderRepo.count.mockResolvedValue(200);

      const qb = {
        where: jest.fn().mockReturnThis(),
        getCount: jest.fn().mockResolvedValue(3),
      };
      tripRepo.createQueryBuilder.mockReturnValue(qb);

      const stats = await service.getDashboardStats();
      expect(stats.riders).toBe(50);
      expect(stats.drivers).toBe(20);
      expect(stats.companies).toBe(5);
      expect(stats.activeTrips).toBe(3);
      expect(stats.restaurantOrders).toBe(200);
    });
  });

  // ─── listRiders ──────────────────────────────────────────────────────────────

  describe('listRiders', () => {
    it('retourne la pagination', async () => {
      const mockRiders = [{ iUserId: 1, vName: 'Jean', vEmail: 'jean@test.com' }];
      const qb = {
        select: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        skip: jest.fn().mockReturnThis(),
        take: jest.fn().mockReturnThis(),
        getManyAndCount: jest.fn().mockResolvedValue([mockRiders, 1]),
      };
      userRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.listRiders(1, 20);
      expect(result.total).toBe(1);
      expect(result.items).toHaveLength(1);
      expect(result.page).toBe(1);
    });
  });

  // ─── updateRiderStatus ───────────────────────────────────────────────────────

  describe('updateRiderStatus', () => {
    it('retourne { updated: true } si le rider existe', async () => {
      userRepo.update.mockResolvedValue({ affected: 1 });
      const result = await service.updateRiderStatus(1, 'Inactive');
      expect(result.updated).toBe(true);
      expect(result.status).toBe('Inactive');
    });

    it('leve NotFoundException si le rider n\'existe pas', async () => {
      userRepo.update.mockResolvedValue({ affected: 0 });
      await expect(service.updateRiderStatus(999, 'Deleted')).rejects.toThrow(NotFoundException);
    });
  });

  // ─── updateDriverStatus ──────────────────────────────────────────────────────

  describe('updateDriverStatus', () => {
    it('retourne { updated: true } si le driver existe', async () => {
      driverRepo.update.mockResolvedValue({ affected: 1 });
      const result = await service.updateDriverStatus(10, 'active');
      expect(result.updated).toBe(true);
    });

    it('leve NotFoundException si le driver n\'existe pas', async () => {
      driverRepo.update.mockResolvedValue({ affected: 0 });
      await expect(service.updateDriverStatus(999, 'Suspend')).rejects.toThrow(NotFoundException);
    });
  });

  // ─── createAdmin ─────────────────────────────────────────────────────────────

  describe('createAdmin', () => {
    it('cree un administrateur avec mot de passe hache (bcrypt)', async () => {
      adminRepo.save.mockResolvedValue({ iAdminId: 5, vEmail: 'newadmin@test.com' });

      const result = await service.createAdmin({
        vFirstName: 'Super',
        vLastName: 'Admin',
        vEmail: 'newadmin@test.com',
        password: 'securePassword',
      });

      expect(result.iAdminId).toBe(5);
      expect(result.vEmail).toBe('newadmin@test.com');

      // Verifier que le mot de passe n'est pas stocke en clair
      const savedArg = adminRepo.create.mock.calls[0][0];
      expect(savedArg.vPassword).not.toBe('securePassword');
      expect(savedArg.vPassword).toMatch(/^\$2[ab]\$/); // format bcrypt
    });
  });

  // ─── updateOrderStatus ───────────────────────────────────────────────────────

  describe('updateOrderStatus', () => {
    it('met a jour le statut de la commande', async () => {
      orderRepo.update.mockResolvedValue({ affected: 1 });
      const result = await service.updateOrderStatus(42, 3);
      expect(result.updated).toBe(true);
      expect(result.statusCode).toBe(3);
    });

    it('leve NotFoundException si commande introuvable', async () => {
      orderRepo.update.mockResolvedValue({ affected: 0 });
      await expect(service.updateOrderStatus(999, 5)).rejects.toThrow(NotFoundException);
    });
  });
});
