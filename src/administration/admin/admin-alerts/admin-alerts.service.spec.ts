import { Test, TestingModule } from '@nestjs/testing';
import { AdminAlertsService } from './admin-alerts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminAlerts } from './entities/admin-alert.entity';
import { Repository } from 'typeorm';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';
import { NotFoundException } from '@nestjs/common';

describe('AdminAlertsService', () => {
  let service: AdminAlertsService;
  let repository: Repository<AdminAlerts>;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    preload: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminAlertsService,
        {
          provide: getRepositoryToken(AdminAlerts),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AdminAlertsService>(AdminAlertsService);
    repository = module.get<Repository<AdminAlerts>>(getRepositoryToken(AdminAlerts));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a new admin alert', async () => {
      const createDto: CreateAdminAlertDto = {
        tAlertText: 'Test Alert',
        iCompanyId: 1,
        iDriverId: 1,
        dDate: new Date(),
        eStatus: 'Unread',
      };
      const newAlert = { iAlertId: 1, ...createDto };

      mockRepository.create.mockReturnValue(newAlert);
      mockRepository.save.mockResolvedValue(newAlert);

      expect(await service.create(createDto)).toEqual(newAlert);
      expect(repository.create).toHaveBeenCalledWith(createDto);
      expect(repository.save).toHaveBeenCalledWith(newAlert);
    });
  });

  describe('findAll', () => {
    it('should return an array of admin alerts', async () => {
      const alerts = [{ iAlertId: 1, tAlertText: 'Test Alert' }];
      mockRepository.find.mockResolvedValue(alerts);
      expect(await service.findAll()).toEqual(alerts);
    });
  });

  describe('findOne', () => {
    it('should return a single admin alert', async () => {
      const alert = { iAlertId: 1, tAlertText: 'Test Alert' };
      mockRepository.findOne.mockResolvedValue(alert);
      expect(await service.findOne(1)).toEqual(alert);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iAlertId: 1 } });
    });

    it('should throw a NotFoundException if alert is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update an admin alert', async () => {
      const updateDto: UpdateAdminAlertDto = { tAlertText: 'Updated Alert' };
      const updatedAlert = { iAlertId: 1, tAlertText: 'Updated Alert' };

      mockRepository.preload.mockResolvedValue(updatedAlert);
      mockRepository.save.mockResolvedValue(updatedAlert);

      expect(await service.update(1, updateDto)).toEqual(updatedAlert);
      expect(repository.preload).toHaveBeenCalledWith({ iAlertId: 1, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedAlert);
    });

    it('should throw a NotFoundException if alert to update is not found', async () => {
      mockRepository.preload.mockResolvedValue(null);
      await expect(service.update(1, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove an admin alert', async () => {
      const existingAlert = { iAlertId: 1, tAlertText: 'Test Alert' };
      jest.spyOn(service, 'findOne').mockResolvedValue(existingAlert as any);
      mockRepository.remove.mockResolvedValue(existingAlert as any);

      expect(await service.remove(1)).toEqual({ message: `AdminAlert with ID #1 has been removed` });
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(repository.remove).toHaveBeenCalledWith(existingAlert);
    });
  });
});