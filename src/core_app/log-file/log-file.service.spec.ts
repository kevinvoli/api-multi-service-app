import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogFileService } from './log-file.service';
import { LogFile } from './entities/log-file.entity';
import { CreateLogFileDto } from './dto/create-log-file.dto';
import { UpdateLogFileDto } from './dto/update-log-file.dto';
import { NotFoundException } from '@nestjs/common';

const mockLogFileRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('LogFileService', () => {
  let service: LogFileService;
  let repository: Repository<LogFile>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogFileService,
        {
          provide: getRepositoryToken(LogFile),
          useFactory: mockLogFileRepository,
        },
      ],
    }).compile();

    service = module.get<LogFileService>(LogFileService);
    repository = module.get<Repository<LogFile>>(getRepositoryToken(LogFile));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new log file', async () => {
      const createLogFileDto: CreateLogFileDto = {
        vLogName: 'test.log',
        tDate: new Date(),
        iCompanyId: 1,
        iDriverId: 1,
        eUserType: 'driver',
        eType: 'licence',
      };
      const expectedResult = { iLogId: 1, ...createLogFileDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createLogFileDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createLogFileDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of log files', async () => {
      const expectedResult = [{ iLogId: 1, vLogName: 'test.log' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single log file', async () => {
      const id = 1;
      const expectedResult = { iLogId: id, vLogName: 'test.log' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iLogId: id } });
    });

    it('should throw a NotFoundException if log file not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a log file', async () => {
      const id = 1;
      const updateLogFileDto: UpdateLogFileDto = { vLogName: 'updated.log' };
      const existingLogFile = { iLogId: id, vLogName: 'test.log' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingLogFile as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateLogFileDto)).toEqual(existingLogFile as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateLogFileDto);
    });

    it('should throw a NotFoundException if log file to update not found', async () => {
        const id = 1;
        const updateLogFileDto: UpdateLogFileDto = { vLogName: 'updated.log' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateLogFileDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a log file', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if log file to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});