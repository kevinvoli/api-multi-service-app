import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ObjectProspectionsService } from './object-prospections.service';
import { ObjectProspections } from './entities/object-prospection.entity';
import { CreateObjectProspectionDto } from './dto/create-object-prospection.dto';
import { UpdateObjectProspectionDto } from './dto/update-object-prospection.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('ObjectProspectionsService', () => {
  let service: ObjectProspectionsService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObjectProspectionsService,
        {
          provide: getRepositoryToken(ObjectProspections),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<ObjectProspectionsService>(ObjectProspectionsService);
    repository = module.get(getRepositoryToken(ObjectProspections));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new prospection', async () => {
      const createDto: CreateObjectProspectionDto = { quantite: 50 };
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
    it('should return an array of prospections', async () => {
      const expectedResult = [{ id: 1, quantite: 50 }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single prospection', async () => {
      const id = 1;
      const expectedResult = { id: 1, quantite: 50 };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if prospection is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update a prospection', async () => {
      const id = 1;
      const updateDto: UpdateObjectProspectionDto = { quantite: 75 };
      const existingProspection = { id: 1, quantite: 50 };
      const updatedProspection = { ...existingProspection, ...updateDto };

      repository.preload.mockResolvedValue(updatedProspection);
      repository.save.mockResolvedValue(updatedProspection);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedProspection);
      expect(result).toEqual(updatedProspection);
    });

    it('should throw NotFoundException if prospection to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateObjectProspectionDto = { quantite: 75 };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove a prospection', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if prospection to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});