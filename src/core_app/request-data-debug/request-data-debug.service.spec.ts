import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestDataDebugService } from './request-data-debug.service';
import { RequestDataDebug } from './entities/request-data-debug.entity';
import { CreateRequestDataDebugDto } from './dto/create-request-data-debug.dto';
import { UpdateRequestDataDebugDto } from './dto/update-request-data-debug.dto';
import { NotFoundException } from '@nestjs/common';

const mockRequestDataDebugRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('RequestDataDebugService', () => {
  let service: RequestDataDebugService;
  let repository: Repository<RequestDataDebug>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestDataDebugService,
        {
          provide: getRepositoryToken(RequestDataDebug),
          useFactory: mockRequestDataDebugRepository,
        },
      ],
    }).compile();

    service = module.get<RequestDataDebugService>(RequestDataDebugService);
    repository = module.get<Repository<RequestDataDebug>>(getRepositoryToken(RequestDataDebug));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new request data debug log', async () => {
      const createRequestDataDebugDto: CreateRequestDataDebugDto = {
        tTitle: 'Test Title',
        tType: 'Test Type',
        tDescription: 'Test Description',
        tPurpose: 'Test Purpose',
        tCallToAction: 'Test CTA',
        tRequestParam: '{"param":"value"}',
      };
      const expectedResult = { iRequestData: 1, ...createRequestDataDebugDto, dModifiedDate: new Date() };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createRequestDataDebugDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createRequestDataDebugDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of request data debug logs', async () => {
      const expectedResult = [{ iRequestData: 1, tTitle: 'Test Title' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single request data debug log', async () => {
      const id = 1;
      const expectedResult = { iRequestData: id, tTitle: 'Test Title' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iRequestData: id } });
    });

    it('should throw a NotFoundException if request data debug log not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a request data debug log', async () => {
      const id = 1;
      const updateRequestDataDebugDto: UpdateRequestDataDebugDto = { tTitle: 'Updated Title' };
      const existingLog = { iRequestData: id, tTitle: 'Test Title' };
      const updatedLog = { ...existingLog, ...updateRequestDataDebugDto };

      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(existingLog as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(updatedLog as any);

      expect(await service.update(id, updateRequestDataDebugDto)).toEqual(updatedLog);
    });

    it('should throw a NotFoundException if request data debug log to update not found', async () => {
        const id = 1;
        const updateRequestDataDebugDto: UpdateRequestDataDebugDto = { tTitle: 'Updated Title' };
        jest.spyOn(repository, 'findOne').mockResolvedValue(null);
        await expect(service.update(id, updateRequestDataDebugDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a request data debug log', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if request data debug log to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});