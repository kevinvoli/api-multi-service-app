import {
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CabBookingService, isBookingModifiable } from './cab-booking.service';
import { CabBooking } from './entities/cab-booking.entity';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
  createQueryBuilder: jest.fn().mockReturnValue({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue([]),
    getOne: jest.fn().mockResolvedValue(null),
    getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    getCount: jest.fn().mockResolvedValue(0),
  }),
};

describe('CabBookingService', () => {
  let service: CabBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CabBookingService,
        { provide: getRepositoryToken(CabBooking), useValue: mockRepo },
        { provide: getRepositoryToken(RegisterUser), useValue: mockRepo },
        { provide: getRepositoryToken(RegisterDriver), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<CabBookingService>(CabBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findDriver', () => {
    const driver = (eStatus: string, iCompanyId = 3) => ({
      iDriverId: 5,
      iCompanyId,
      eStatus,
    });

    beforeEach(() => {
      mockRepo.findOneBy.mockReset();
    });

    it('renvoie le chauffeur actif de la compagnie', async () => {
      mockRepo.findOneBy.mockResolvedValue(driver('active'));
      await expect(service.findDriver(5, 3)).resolves.toMatchObject({
        iDriverId: 5,
      });
    });

    it('renvoie 404 pour un chauffeur absent', async () => {
      mockRepo.findOneBy.mockResolvedValue(null);
      await expect(service.findDriver(5, 3)).rejects.toThrow(NotFoundException);
    });

    it('renvoie 404 pour un chauffeur supprimé', async () => {
      mockRepo.findOneBy.mockResolvedValue(driver('Deleted'));
      await expect(service.findDriver(5, 3)).rejects.toThrow(NotFoundException);
    });

    it('renvoie 403 pour un chauffeur d une autre compagnie', async () => {
      mockRepo.findOneBy.mockResolvedValue(driver('active', 4));
      await expect(service.findDriver(5, 3)).rejects.toThrow(
        ForbiddenException,
      );
    });

    it.each(['inactive', 'Suspend'])(
      'renvoie 409 pour un chauffeur %s',
      async (eStatus) => {
        mockRepo.findOneBy.mockResolvedValue(driver(eStatus));
        await expect(service.findDriver(5, 3)).rejects.toThrow(
          ConflictException,
        );
      },
    );

    it('sans companyId, un chauffeur inactif est aussi refusé', async () => {
      mockRepo.findOneBy.mockResolvedValue(driver('inactive'));
      await expect(service.findDriver(5)).rejects.toThrow(ConflictException);
    });
  });

  describe('isBookingModifiable', () => {
    it.each(['Pending', 'Assign'] as const)(
      'autorise le statut %s sans course créée',
      (eStatus) => {
        expect(isBookingModifiable({ iTripId: 0, eStatus })).toBe(true);
      },
    );

    it.each(['Accepted', 'Declined', 'Failed', 'Cancel', 'Completed'] as const)(
      'refuse le statut %s',
      (eStatus) => {
        expect(isBookingModifiable({ iTripId: 0, eStatus })).toBe(false);
      },
    );

    it('refuse une réservation liée à une course', () => {
      expect(isBookingModifiable({ iTripId: 42, eStatus: 'Assign' })).toBe(
        false,
      );
    });
  });
});
