import { Test, TestingModule } from '@nestjs/testing';
import { IntentionsCriteresController } from './intentions-criteres.controller';
import { IntentionsCriteresService } from './intentions-criteres.service';
import { CreateIntentionsCritereDto } from './dto/create-intentions-critere.dto';
import { UpdateIntentionsCritereDto } from './dto/update-intentions-critere.dto';

const mockCritere = { id: 1, intentionId: 1, sousService: 2 };

describe('IntentionsCriteresController', () => {
  let controller: IntentionsCriteresController;
  let service: IntentionsCriteresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntentionsCriteresController],
      providers: [
        {
          provide: IntentionsCriteresService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockCritere),
            findAll: jest.fn().mockResolvedValue([mockCritere]),
            findOne: jest.fn().mockResolvedValue(mockCritere),
            update: jest.fn().mockResolvedValue({ ...mockCritere, area: 'new area' }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<IntentionsCriteresController>(IntentionsCriteresController);
    service = module.get<IntentionsCriteresService>(IntentionsCriteresService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateIntentionsCritereDto = { intentionId: 1, sousService: 2 };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockCritere);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockCritere]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockCritere);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateIntentionsCritereDto = { area: 'new area' };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockCritere, area: 'new area' });
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