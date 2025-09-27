import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterServiceCategoryService } from './master-service-category.service';
import { MasterServiceCategory } from './entities/master-service-category.entity';
import { CreateMasterServiceCategoryDto } from './dto/create-master-service-category.dto';
import { UpdateMasterServiceCategoryDto } from './dto/update-master-service-category.dto';
import { NotFoundException } from '@nestjs/common';

const mockMasterServiceCategoryRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('MasterServiceCategoryService', () => {
  let service: MasterServiceCategoryService;
  let repository: Repository<MasterServiceCategory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MasterServiceCategoryService,
        {
          provide: getRepositoryToken(MasterServiceCategory),
          useFactory: mockMasterServiceCategoryRepository,
        },
      ],
    }).compile();

    service = module.get<MasterServiceCategoryService>(MasterServiceCategoryService);
    repository = module.get<Repository<MasterServiceCategory>>(getRepositoryToken(MasterServiceCategory));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new master service category', async () => {
      const createMasterServiceCategoryDto: CreateMasterServiceCategoryDto = {
        vCategoryName: 'Test Category',
        eType: 'Ride',
        eStatus: 'Active',
        vIconImage: 'test.png',
        vIconImage1: 'test1.png',
        vIconImage2: 'test2.png',
        vBgImage: 'bg.png',
        vTextColor: '#FFFFFF',
        vBgColor: '#000000',
        iDisplayOrder: 1,
        iListMaxCount: 10,
      };
      const expectedResult = { iMasterServiceCategoryId: 1, ...createMasterServiceCategoryDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createMasterServiceCategoryDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createMasterServiceCategoryDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of master service categories', async () => {
      const expectedResult = [{ iMasterServiceCategoryId: 1, vCategoryName: 'Test Category' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single master service category', async () => {
      const id = 1;
      const expectedResult = { iMasterServiceCategoryId: id, vCategoryName: 'Test Category' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iMasterServiceCategoryId: id } });
    });

    it('should throw a NotFoundException if master service category not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a master service category', async () => {
      const id = 1;
      const updateMasterServiceCategoryDto: UpdateMasterServiceCategoryDto = { vCategoryName: 'Updated Category' };
      const existingMasterServiceCategory = { iMasterServiceCategoryId: id, vCategoryName: 'Test Category' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingMasterServiceCategory as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateMasterServiceCategoryDto)).toEqual(existingMasterServiceCategory as any);
      expect(repository.update).toHaveBeenCalledWith(id, updateMasterServiceCategoryDto);
    });

    it('should throw a NotFoundException if master service category to update not found', async () => {
        const id = 1;
        const updateMasterServiceCategoryDto: UpdateMasterServiceCategoryDto = { vCategoryName: 'Updated Category' };
        jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException());
        await expect(service.update(id, updateMasterServiceCategoryDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a master service category', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if master service category to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});