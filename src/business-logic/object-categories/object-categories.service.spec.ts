import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ObjectCategoriesService } from './object-categories.service';
import { ObjectCategories } from './entities/object-category.entity';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('ObjectCategoriesService', () => {
  let service: ObjectCategoriesService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObjectCategoriesService,
        {
          provide: getRepositoryToken(ObjectCategories),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<ObjectCategoriesService>(ObjectCategoriesService);
    repository = module.get(getRepositoryToken(ObjectCategories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new category', async () => {
      const createDto: CreateObjectCategoryDto = { libelleFr: 'Test Category' };
      const expectedResult = { id: 1, ...createDto };

      repository.create.mockReturnValue(createDto);
      repository.save.mockResolvedValue(expectedResult);

      const result = await service.create(createDto);
      expect(repository.create).toHaveBeenCalledWith(createDto);
      expect(repository.save).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll()', () => {
    it('should return an array of categories', async () => {
      const expectedResult = [{ id: 1, libelleFr: 'Test Category' }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single category', async () => {
      const id = 1;
      const expectedResult = { id: 1, libelleFr: 'Test Category' };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if category is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update a category', async () => {
      const id = 1;
      const updateDto: UpdateObjectCategoryDto = { libelleFr: 'Updated Category' };
      const existingCategory = { id: 1, libelleFr: 'Test Category' };
      const updatedCategory = { ...existingCategory, ...updateDto };

      repository.preload.mockResolvedValue(updatedCategory);
      repository.save.mockResolvedValue(updatedCategory);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedCategory);
      expect(result).toEqual(updatedCategory);
    });

    it('should throw NotFoundException if category to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateObjectCategoryDto = { libelleFr: 'Updated Category' };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove a category', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if category to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});