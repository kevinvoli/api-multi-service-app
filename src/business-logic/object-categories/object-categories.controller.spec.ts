import { Test, TestingModule } from '@nestjs/testing';
import { ObjectCategoriesController } from './object-categories.controller';
import { ObjectCategoriesService } from './object-categories.service';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';

const mockCategory = { id: 1, libelleFr: 'Test Category' };

describe('ObjectCategoriesController', () => {
  let controller: ObjectCategoriesController;
  let service: ObjectCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectCategoriesController],
      providers: [
        {
          provide: ObjectCategoriesService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockCategory),
            findAll: jest.fn().mockResolvedValue([mockCategory]),
            findOne: jest.fn().mockResolvedValue(mockCategory),
            update: jest.fn().mockResolvedValue({ ...mockCategory, libelleFr: 'Updated' }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<ObjectCategoriesController>(ObjectCategoriesController);
    service = module.get<ObjectCategoriesService>(ObjectCategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateObjectCategoryDto = { libelleFr: 'Test Category' };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockCategory);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockCategory]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockCategory);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateObjectCategoryDto = { libelleFr: 'Updated' };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockCategory, libelleFr: 'Updated' });
    });
  });

  describe('remove()', () => {
    it('should call service.remove with the correct id', async () => {
      const id = '1';
      const result = await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
      expect(result).toEqual({ deleted: true });
    });
  });
});