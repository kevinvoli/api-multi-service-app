import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationSoundService } from './notification-sound.service';
import { NotificationSound } from './entities/notification-sound.entity';
import { CreateNotificationSoundDto } from './dto/create-notification-sound.dto';
import { UpdateNotificationSoundDto } from './dto/update-notification-sound.dto';
import { NotFoundException } from '@nestjs/common';

const mockNotificationSoundRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('NotificationSoundService', () => {
  let service: NotificationSoundService;
  let repository: Repository<NotificationSound>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationSoundService,
        {
          provide: getRepositoryToken(NotificationSound),
          useFactory: mockNotificationSoundRepository,
        },
      ],
    }).compile();

    service = module.get<NotificationSoundService>(NotificationSoundService);
    repository = module.get<Repository<NotificationSound>>(getRepositoryToken(NotificationSound));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new notification sound', async () => {
      const createNotificationSoundDto: CreateNotificationSoundDto = {
        vFileName: 'test.mp3',
        eSoundFor: 'User',
        eAdminDisplay: 'Yes',
        eStatus: 'Active',
        eIsSelected: 'No',
        eDefault: 'No',
      };
      const expectedResult = { iSoundId: 1, ...createNotificationSoundDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createNotificationSoundDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createNotificationSoundDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of notification sounds', async () => {
      const expectedResult = [{ iSoundId: 1, vFileName: 'test.mp3' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single notification sound', async () => {
      const id = 1;
      const expectedResult = { iSoundId: id, vFileName: 'test.mp3' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iSoundId: id } });
    });

    it('should throw a NotFoundException if notification sound not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a notification sound', async () => {
      const id = 1;
      const updateNotificationSoundDto: UpdateNotificationSoundDto = { vFileName: 'updated.mp3' };
      const existingNotificationSound = { iSoundId: id, vFileName: 'test.mp3' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingNotificationSound as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateNotificationSoundDto)).toEqual(existingNotificationSound as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateNotificationSoundDto);
    });

    it('should throw a NotFoundException if notification sound to update not found', async () => {
        const id = 1;
        const updateNotificationSoundDto: UpdateNotificationSoundDto = { vFileName: 'updated.mp3' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateNotificationSoundDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a notification sound', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if notification sound to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});