import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { IntentionsService } from './intentions.service';
import { Intentions } from './entities/intention.entity';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';

const mockRepositoryFactory = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  preload: jest.fn(),
  delete: jest.fn(),
});

describe('IntentionsService', () => {
  let service: IntentionsService;
  let repository: ReturnType<typeof mockRepositoryFactory>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IntentionsService,
        {
          provide: getRepositoryToken(Intentions),
          useFactory: mockRepositoryFactory,
        },
      ],
    }).compile();

    service = module.get<IntentionsService>(IntentionsService);
    repository = module.get(getRepositoryToken(Intentions));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create and save a new intention', async () => {
      const createDto: CreateIntentionDto = { type: 'test', serviceId: 1 };
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
    it('should return an array of intentions', async () => {
      const expectedResult = [{ id: 1, type: 'test', serviceId: 1 }];
      repository.find.mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne()', () => {
    it('should return a single intention', async () => {
      const id = 1;
      const expectedResult = { id, type: 'test', serviceId: 1 };
      repository.findOne.mockResolvedValue(expectedResult);
      const result = await service.findOne(id);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException if intention is not found', async () => {
      const id = 99;
      repository.findOne.mockResolvedValue(null);
      await expect(service.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update()', () => {
    it('should update an intention', async () => {
      const id = 1;
      const updateDto: UpdateIntentionDto = { type: 'updated' };
      const existingIntention = { id: 1, type: 'test', serviceId: 1 };
      const updatedIntention = { ...existingIntention, ...updateDto };

      repository.preload.mockResolvedValue(updatedIntention);
      repository.save.mockResolvedValue(updatedIntention);

      const result = await service.update(id, updateDto);
      expect(repository.preload).toHaveBeenCalledWith({ id, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedIntention);
      expect(result).toEqual(updatedIntention);
    });

    it('should throw NotFoundException if intention to update is not found', async () => {
      const id = 99;
      const updateDto: UpdateIntentionDto = { type: 'updated' };
      repository.preload.mockResolvedValue(null);
      await expect(service.update(id, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove()', () => {
    it('should remove an intention', async () => {
      const id = 1;
      repository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.remove(id);
      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ deleted: true });
    });

    it('should throw NotFoundException if intention to remove is not found', async () => {
      const id = 99;
      repository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});