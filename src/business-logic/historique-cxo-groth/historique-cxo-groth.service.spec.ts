import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';
import { HistoriqueCxoGroth } from './entities/historique-cxo-groth.entity';
import { CreateHistoriqueCxoGrothDto } from './dto/create-historique-cxo-groth.dto';
import { UpdateHistoriqueCxoGrothDto } from './dto/update-historique-cxo-groth.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('HistoriqueCxoGrothService', () => {
  let service: HistoriqueCxoGrothService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HistoriqueCxoGrothService,
        {
          provide: getRepositoryToken(HistoriqueCxoGroth),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<HistoriqueCxoGrothService>(HistoriqueCxoGrothService);
    repository = module.get(getRepositoryToken(HistoriqueCxoGroth));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new historique', async () => {
      const createDto: CreateHistoriqueCxoGrothDto = { ios: 10, android: 20 };
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
    it('should return an array of historiques', async () => {
      const expectedResult = [{ id: 1, ios: 10, android: 20 }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single historique', async () => {
      const id = 1;
      const expectedResult = { id, ios: 10, android: 20 };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if historique is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update a historique', async () => {
      const id = 1;
      const updateDto: UpdateHistoriqueCxoGrothDto = { ios: 15 };
      const existingHistorique = { id: 1, ios: 10, android: 20 };
      const updatedHistorique = { ...existingHistorique, ...updateDto };

      repository.preload.mockResolvedValue(updatedHistorique);
      repository.save.mockResolvedValue(updatedHistorique);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedHistorique);
      expect(result).toEqual(updatedHistorique);
    });

    it('should throw NotFoundException if historique to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateHistoriqueCxoGrothDto = { ios: 15 };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove a historique', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if historique to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});