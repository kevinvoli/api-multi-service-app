import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceCategoriesService } from './service-categories.service';
import { ServiceCategories } from './entities/service-category.entity';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { NotFoundException } from '@nestjs/common';

const mockServiceCategoriesRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('ServiceCategoriesService', () => {
  let service: ServiceCategoriesService;
  let repository: Repository<ServiceCategories>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceCategoriesService,
        {
          provide: getRepositoryToken(ServiceCategories),
          useFactory: mockServiceCategoriesRepository,
        },
      ],
    }).compile();

    service = module.get<ServiceCategoriesService>(ServiceCategoriesService);
    repository = module.get<Repository<ServiceCategories>>(getRepositoryToken(ServiceCategories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new service category', async () => {
      const createServiceCategoryDto: CreateServiceCategoryDto = {
        vService: 'Test Service',
        vServiceNameEn: 'Test Service EN',
        vServiceNameFr: 'Test Service FR',
        iDisplayOrder: 1,
        vImage: 'test.png',
        tDescription: 'Test Description',
        eShowTerms: 'No',
        eProofUpload: 'No',
        eStatus: 'Active',
        eType: 'separate',
        prescriptionRequired: 'No',
        tProofNote: '',
        tProofNoteDriver: '',
        tProofNoteStore: '',
        eOtpCodeEnable: 'No',
      };
      const expectedResult = { iServiceId: 1, ...createServiceCategoryDto };

      jest.spyOn(repository, 'create').mockReturnValue(expectedResult as any);
      jest.spyOn(repository, 'save').mockResolvedValue(expectedResult as any);

      expect(await service.create(createServiceCategoryDto)).toEqual(expectedResult);
      expect(repository.create).toHaveBeenCalledWith(createServiceCategoryDto);
      expect(repository.save).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of service categories', async () => {
      const expectedResult = [{ iServiceId: 1, vService: 'Test Service' }];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult as any);
      expect(await service.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single service category', async () => {
      const id = 1;
      const expectedResult = { iServiceId: id, vService: 'Test Service' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await service.findOne(id)).toEqual(expectedResult);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iServiceId: id } });
    });

    it('should throw a NotFoundException if service category not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a service category', async () => {
      const id = 1;
      const updateServiceCategoryDto: UpdateServiceCategoryDto = { vService: 'Updated Service' };
      const existingServiceCategory = { iServiceId: id, vService: 'Test Service' };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingServiceCategory as any);
      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);

      expect(await service.update(id, updateServiceCategoryDto)).toEqual(existingServiceCategory as any);
    });

    it('should throw a NotFoundException if service category to update not found', async () => {
        const id = 1;
        const updateServiceCategoryDto: UpdateServiceCategoryDto = { vService: 'Updated Service' };
        jest.spyOn(repository, 'findOne').mockResolvedValue(null);
        await expect(service.update(id, updateServiceCategoryDto)).rejects.toThrow(NotFoundException);
      });
  });

  describe('remove', () => {
    it('should remove a service category', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
      await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
    });

    it('should throw a NotFoundException if service category to remove not found', async () => {
      const id = 1;
      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});