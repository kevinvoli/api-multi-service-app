import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { IntentionsCriteresService } from './intentions-criteres.service';
import { IntentionsCriteres } from './entities/intentions-critere.entity';
import { CreateIntentionsCritereDto } from './dto/create-intentions-critere.dto';
import { UpdateIntentionsCritereDto } from './dto/update-intentions-critere.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('IntentionsCriteresService', () => {
  let service: IntentionsCriteresService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IntentionsCriteresService,
        {
          provide: getRepositoryToken(IntentionsCriteres),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<IntentionsCriteresService>(IntentionsCriteresService);
    repository = module.get(getRepositoryToken(IntentionsCriteres));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new critere', async () => {
      const createDto: CreateIntentionsCritereDto = { intentionId: 1, sousService: 2 };
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
    it('should return an array of criteres', async () => {
      const expectedResult = [{ id: 1, intentionId: 1, sousService: 2 }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single critere', async () => {
      const id = 1;
      const expectedResult = { id, intentionId: 1, sousService: 2 };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if critere is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update a critere', async () => {
      const id = 1;
      const updateDto: UpdateIntentionsCritereDto = { area: 'new area' };
      const existingCritere = { id: 1, intentionId: 1, sousService: 2 };
      const updatedCritere = { ...existingCritere, ...updateDto };

      repository.preload.mockResolvedValue(updatedCritere);
      repository.save.mockResolvedValue(updatedCritere);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedCritere);
      expect(result).toEqual(updatedCritere);
    });

    it('should throw NotFoundException if critere to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateIntentionsCritereDto = { area: 'new area' };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove a critere', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if critere to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});