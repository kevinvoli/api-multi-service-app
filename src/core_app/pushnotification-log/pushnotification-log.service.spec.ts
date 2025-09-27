import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PushnotificationLogService } from './pushnotification-log.service';
import { PushnotificationLog } from './entities/pushnotification-log.entity';
import { CreatePushnotificationLogDto } from './dto/create-pushnotification-log.dto';
import { UpdatePushnotificationLogDto } from './dto/update-pushnotification-log.dto';
import { NotFoundException } from '@nestjs/common';

const mockPushnotificationLogRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('PushnotificationLogService', () => {
  let service: PushnotificationLogService;
  let repository: Repository<PushnotificationLog>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PushnotificationLogService,
        {
          provide: getRepositoryToken(PushnotificationLog),
          useFactory: mockPushnotificationLogRepository,
        },
      ],
    }).compile();

    service = module.get<PushnotificationLogService>(PushnotificationLogService);
    repository = module.get<Repository<PushnotificationLog>>(getRepositoryToken(PushnotificationLog));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new pushnotification log', async () => {
      const createPushnotificationLogDto: CreatePushnotificationLogDto = {
        eUserType: 'rider',
        iUserId: 1,
        tMessage: 'Test message',
        dDateTime: new Date(),
        ipAddress: '127.0.0.1',
      };
      const expectedResult = { iPushnotificationId: 1, ...createPushnotificationLogDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createPushnotificationLogDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createPushnotificationLogDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of pushnotification logs', async () => {
      const expectedResult = [{ iPushnotificationId: 1, tMessage: 'Test message' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single pushnotification log', async () => {
      const id = 1;
      const expectedResult = { iPushnotificationId: id, tMessage: 'Test message' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iPushnotificationId: id } });
    });

    it('should throw a NotFoundException if pushnotification log not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a pushnotification log', async () => {
      const id = 1;
      const updatePushnotificationLogDto: UpdatePushnotificationLogDto = { tMessage: 'Updated message' };
      const existingPushnotificationLog = { iPushnotificationId: id, tMessage: 'Test message' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingPushnotificationLog as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updatePushnotificationLogDto)).toEqual(existingPushnotificationLog as any);
      expect(repository.update).toHaveBeenCalledWith(id, updatePushnotificationLogDto);
    });

    it('should throw a NotFoundException if pushnotification log to update not found', async () => {
        const id = 1;
        const updatePushnotificationLogDto: UpdatePushnotificationLogDto = { tMessage: 'Updated message' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updatePushnotificationLogDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a pushnotification log', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if pushnotification log to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});