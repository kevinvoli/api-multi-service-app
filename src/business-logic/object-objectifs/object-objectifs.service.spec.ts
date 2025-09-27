import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ObjectObjectifsService } from './object-objectifs.service';
import { ObjectObjectifs } from './entities/object-objectif.entity';
import { CreateObjectObjectifDto } from './dto/create-object-objectif.dto';
import { UpdateObjectObjectifDto } from './dto/update-object-objectif.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('ObjectObjectifsService', () => {
  let service: ObjectObjectifsService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObjectObjectifsService,
        {
          provide: getRepositoryToken(ObjectObjectifs),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<ObjectObjectifsService>(ObjectObjectifsService);
    repository = module.get(getRepositoryToken(ObjectObjectifs));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new objectif', async () => {
      const createDto: CreateObjectObjectifDto = { quantite: 100 };
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
    it('should return an array of objectifs', async () => {
      const expectedResult = [{ id: 1, quantite: 100 }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single objectif', async () => {
      const id = 1;
      const expectedResult = { id: 1, quantite: 100 };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if objectif is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update an objectif', async () => {
      const id = 1;
      const updateDto: UpdateObjectObjectifDto = { quantite: 200 };
      const existingObjectif = { id: 1, quantite: 100 };
      const updatedObjectif = { ...existingObjectif, ...updateDto };

      repository.preload.mockResolvedValue(updatedObjectif);
      repository.save.mockResolvedValue(updatedObjectif);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedObjectif);
      expect(result).toEqual(updatedObjectif);
    });

    it('should throw NotFoundException if objectif to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateObjectObjectifDto = { quantite: 200 };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove an objectif', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if objectif to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});