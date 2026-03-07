import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';
import { AuthService, LoginStatus } from './auth.service';
import { RegisterUser } from '../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../users/register-driver/entities/register-driver.entity';
import { Company } from '../users/company/entities/company.entity';
import { Administrators } from '../administration/administrators/entities/administrator.entity';
import { MemberLog } from '../users/member-logs/entities/member-log.entity';

const md5 = (s: string) => crypto.createHash('md5').update(s).digest('hex');

// ─── Helpers repo mock ───────────────────────────────────────────────────────

function makeRepo(overrides: Partial<Record<string, jest.Mock>> = {}) {
  return {
    createQueryBuilder: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue(null),
    }),
    findOneBy: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockReturnValue({}),
    save: jest.fn().mockResolvedValue({}),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    ...overrides,
  };
}

describe('AuthService', () => {
  let service: AuthService;
  let userRepo: ReturnType<typeof makeRepo>;
  let driverRepo: ReturnType<typeof makeRepo>;
  let companyRepo: ReturnType<typeof makeRepo>;
  let adminRepo: ReturnType<typeof makeRepo>;
  let memberLogRepo: ReturnType<typeof makeRepo>;
  let jwtService: { sign: jest.Mock };

  beforeEach(async () => {
    userRepo = makeRepo();
    driverRepo = makeRepo();
    companyRepo = makeRepo();
    adminRepo = makeRepo();
    memberLogRepo = makeRepo();
    jwtService = { sign: jest.fn().mockReturnValue('mock-jwt-token') };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: jwtService },
        { provide: getRepositoryToken(RegisterUser), useValue: userRepo },
        { provide: getRepositoryToken(RegisterDriver), useValue: driverRepo },
        { provide: getRepositoryToken(Company), useValue: companyRepo },
        { provide: getRepositoryToken(Administrators), useValue: adminRepo },
        { provide: getRepositoryToken(MemberLog), useValue: memberLogRepo },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  // ─── Login Rider ────────────────────────────────────────────────────────────

  describe('login (rider)', () => {
    it('retourne SUCCESS + token si credentials valides', async () => {
      const mockUser = {
        iUserId: 1,
        vName: 'Jean',
        vLastName: 'Dupont',
        vEmail: 'jean@test.com',
        vPhone: '0600000000',
        vPassword: md5('password123'),
        eStatus: 'Active',
      };

      const qbMock = {
        where: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(mockUser),
      };
      userRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'jean@test.com', password: 'password123', userType: 'rider' });

      expect(result.login_status).toBe(LoginStatus.SUCCESS);
      expect(result.token).toBe('mock-jwt-token');
      expect((result as any).user.userType).toBe('rider');
    });

    it('retourne INVALID_CREDENTIALS si mot de passe incorrect', async () => {
      const mockUser = {
        iUserId: 1,
        vPassword: md5('correct'),
        eStatus: 'Active',
      };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockUser) };
      userRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'jean@test.com', password: 'wrong', userType: 'rider' });
      expect(result.login_status).toBe(LoginStatus.INVALID_CREDENTIALS);
    });

    it('retourne INVALID_CREDENTIALS si utilisateur introuvable', async () => {
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(null) };
      userRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'inconnu@test.com', password: 'pass', userType: 'rider' });
      expect(result.login_status).toBe(LoginStatus.INVALID_CREDENTIALS);
    });

    it('retourne DELETED si eStatus=Deleted', async () => {
      const mockUser = { iUserId: 1, vPassword: md5('pass'), eStatus: 'Deleted' };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockUser) };
      userRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'x', password: 'pass', userType: 'rider' });
      expect(result.login_status).toBe(LoginStatus.DELETED);
    });

    it('retourne INACTIVE si eStatus=Inactive', async () => {
      const mockUser = { iUserId: 1, vPassword: md5('pass'), eStatus: 'Inactive' };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockUser) };
      userRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'x', password: 'pass', userType: 'rider' });
      expect(result.login_status).toBe(LoginStatus.INACTIVE);
    });
  });

  // ─── Login Driver ────────────────────────────────────────────────────────────

  describe('login (driver)', () => {
    it('retourne SUCCESS si driver actif avec bon mot de passe', async () => {
      const mockDriver = {
        iDriverId: 10,
        vName: 'Ali',
        vLastName: 'Ben',
        vEmail: 'ali@test.com',
        vPhone: '0700000000',
        iCompanyId: 1,
        vPassword: md5('secret'),
        eStatus: 'active',
      };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockDriver) };
      driverRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'ali@test.com', password: 'secret', userType: 'driver' });
      expect(result.login_status).toBe(LoginStatus.SUCCESS);
      expect((result as any).user.userType).toBe('driver');
    });

    it('retourne INACTIVE si driver suspendu', async () => {
      const mockDriver = { iDriverId: 10, vPassword: md5('p'), eStatus: 'Suspend' };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockDriver) };
      driverRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'x', password: 'p', userType: 'driver' });
      expect(result.login_status).toBe(LoginStatus.INACTIVE);
    });
  });

  // ─── Login Admin ─────────────────────────────────────────────────────────────

  describe('login (hotel/admin)', () => {
    it('retourne SUCCESS si admin actif avec bon mot de passe bcrypt', async () => {
      const hashed = await bcrypt.hash('adminpass', 10);
      const mockAdmin = {
        iAdminId: 1,
        vFirstName: 'Super',
        vLastName: 'Admin',
        vEmail: 'admin@test.com',
        iGroupId: 1,
        vPassword: hashed,
        eStatus: 'Active',
      };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockAdmin) };
      adminRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'admin@test.com', password: 'adminpass', userType: 'hotel' });
      expect(result.login_status).toBe(LoginStatus.SUCCESS);
      expect((result as any).user.userType).toBe('hotel');
    });

    it('retourne INVALID_CREDENTIALS si mauvais mot de passe bcrypt', async () => {
      const hashed = await bcrypt.hash('correct', 10);
      const mockAdmin = { iAdminId: 1, vPassword: hashed, eStatus: 'Active' };
      const qbMock = { where: jest.fn().mockReturnThis(), getOne: jest.fn().mockResolvedValue(mockAdmin) };
      adminRepo.createQueryBuilder.mockReturnValue(qbMock);

      const result = await service.login({ login: 'admin@test.com', password: 'wrong', userType: 'hotel' });
      expect(result.login_status).toBe(LoginStatus.INVALID_CREDENTIALS);
    });
  });

  // ─── checkPhone ──────────────────────────────────────────────────────────────

  describe('checkPhone', () => {
    it('retourne { exists: true } si rider trouve', async () => {
      userRepo.findOneBy.mockResolvedValue({ iUserId: 1 });
      const result = await service.checkPhone('0600000000', 'rider');
      expect(result.exists).toBe(true);
    });

    it('retourne { exists: false } si rider introuvable', async () => {
      userRepo.findOneBy.mockResolvedValue(null);
      const result = await service.checkPhone('0000000000', 'rider');
      expect(result.exists).toBe(false);
    });
  });
});
