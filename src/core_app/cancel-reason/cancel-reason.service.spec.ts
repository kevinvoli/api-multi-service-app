import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CancelReasonService } from './cancel-reason.service';
import { CancelReason } from './entities/cancel-reason.entity';
import { CreateCancelReasonDto } from './dto/create-cancel-reason.dto';
import { UpdateCancelReasonDto } from './dto/update-cancel-reason.dto';
import { NotFoundException } from '@nestjs/common';

const mockCancelReasonRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('CancelReasonService', () => {
  let service: CancelReasonService;
  let repository: Repository<CancelReason>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CancelReasonService,
        {
          provide: getRepositoryToken(CancelReason),
          useFactory: mockCancelReasonRepository,
        },
      ],
    }).compile();

    service = module.get<CancelReasonService>(CancelReasonService);
    repository = module.get<Repository<CancelReason>>(getRepositoryToken(CancelReason));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new cancel reason', async () => {
      const createCancelReasonDto: CreateCancelReasonDto = {
        iDisplayOrder: 1,
        iSortId: 1,
        eStatus: 'Active',
        eAllowedCharge: 'No',
        vTitleEn: 'Test EN',
        vTitleFr: 'Test FR',
        eType: 'Ride',
        eFor: 'Passenger',
        eFly: '0',
      };
      const expectedResult = { iCancelReasonId: 1, ...createCancelReasonDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createCancelReasonDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createCancelReasonDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of cancel reasons', async () => {
      const expectedResult = [{ iCancelReasonId: 1, vTitleEn: 'Test' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single cancel reason', async () => {
      const id = 1;
      const expectedResult = { iCancelReasonId: id, vTitleEn: 'Test' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iCancelReasonId: id } });
    });

    it('should throw a NotFoundException if cancel reason not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a cancel reason', async () => {
      const id = 1;
      const updateCancelReasonDto: UpdateCancelReasonDto = { vTitleEn: 'Updated Test' };
      const existingCancelReason = { iCancelReasonId: id, vTitleEn: 'Test' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingCancelReason as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateCancelReasonDto)).toEqual(existingCancelReason as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateCancelReasonDto);
    });

    it('should throw a NotFoundException if cancel reason to update not found', async () => {
        const id = 1;
        const updateCancelReasonDto: UpdateCancelReasonDto = { vTitleEn: 'Updated Test' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateCancelReasonDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a cancel reason', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if cancel reason to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});