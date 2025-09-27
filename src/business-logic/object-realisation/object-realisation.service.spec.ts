import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ObjectRealisationService } from './object-realisation.service';
import { ObjectRealisations } from './entities/object-realisation.entity';
import { CreateObjectRealisationDto } from './dto/create-object-realisation.dto';
import { UpdateObjectRealisationDto } from './dto/update-object-realisation.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('ObjectRealisationService', () => {
  let service: ObjectRealisationService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObjectRealisationService,
        {
          provide: getRepositoryToken(ObjectRealisations),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<ObjectRealisationService>(ObjectRealisationService);
    repository = module.get(getRepositoryToken(ObjectRealisations));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new realisation', async () => {
      const createDto: CreateObjectRealisationDto = { quantite: 10 };
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
    it('should return an array of realisations', async () => {
      const expectedResult = [{ id: 1, quantite: 10 }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single realisation', async () => {
      const id = 1;
      const expectedResult = { id: 1, quantite: 10 };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if realisation is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update a realisation', async () => {
      const id = 1;
      const updateDto: UpdateObjectRealisationDto = { quantite: 20 };
      const existingRealisation = { id: 1, quantite: 10 };
      const updatedRealisation = { ...existingRealisation, ...updateDto };

      repository.preload.mockResolvedValue(updatedRealisation);
      repository.save.mockResolvedValue(updatedRealisation);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedRealisation);
      expect(result).toEqual(updatedRealisation);
    });

    it('should throw NotFoundException if realisation to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateObjectRealisationDto = { quantite: 20 };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove a realisation', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if realisation to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});