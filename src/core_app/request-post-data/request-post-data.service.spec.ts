import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestPostDataService } from './request-post-data.service';
import { RequestPostData } from './entities/request-post-datum.entity';
import { CreateRequestPostDatumDto } from './dto/create-request-post-datum.dto';
import { UpdateRequestPostDatumDto } from './dto/update-request-post-datum.dto';
import { NotFoundException } from '@nestjs/common';

const mockRequestPostDataRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('RequestPostDataService', () => {
  let service: RequestPostDataService;
  let repository: Repository<RequestPostData>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestPostDataService,
        {
          provide: getRepositoryToken(RequestPostData),
          useFactory: mockRequestPostDataRepository,
        },
      ],
    }).compile();

    service = module.get<RequestPostDataService>(RequestPostDataService);
    repository = module.get<Repository<RequestPostData>>(getRepositoryToken(RequestPostData));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new request post data log', async () => {
      const createRequestPostDatumDto: CreateRequestPostDatumDto = {
        tData: '{"key":"value"}',
        tipaddress: '127.0.0.1',
      };
      const expectedResult = { iRequestPostId: 1, ...createRequestPostDatumDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createRequestPostDatumDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createRequestPostDatumDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of request post data logs', async () => {
      const expectedResult = [{ iRequestPostId: 1, tData: '{"key":"value"}' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single request post data log', async () => {
      const id = 1;
      const expectedResult = { iRequestPostId: id, tData: '{"key":"value"}' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iRequestPostId: id } });
    });

    it('should throw a NotFoundException if request post data log not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a request post data log', async () => {
      const id = 1;
      const updateRequestPostDatumDto: UpdateRequestPostDatumDto = { tData: '{"new_key":"new_value"}' };
      const existingLog = { iRequestPostId: id, tData: '{"key":"value"}' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingLog as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateRequestPostDatumDto)).toEqual(existingLog as any);
    });

    it('should throw a NotFoundException if request post data log to update not found', async () => {
        const id = 1;
        const updateRequestPostDatumDto: UpdateRequestPostDatumDto = { tData: '{"new_key":"new_value"}' };
        jest.spyOn(repository, 'findOne').mockResolvedValue(null);
        await expect(service.update(id, updateRequestPostDatumDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a request post data log', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if request post data log to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});