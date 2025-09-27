import { Test, TestingModule } from '@nestjs/testing';
import { IntentionsController } from './intentions.controller';
import { IntentionsService } from './intentions.service';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';

const mockIntention = { id: 1, type: 'test', serviceId: 1 };

describe('IntentionsController', () => {
  let controller: IntentionsController;
  let service: IntentionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntentionsController],
      providers: [
        {
          provide: IntentionsService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockIntention),
            findAll: jest.fn().mockResolvedValue([mockIntention]),
            findOne: jest.fn().mockResolvedValue(mockIntention),
            update: jest.fn().mockResolvedValue({ ...mockIntention, type: 'updated' }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<IntentionsController>(IntentionsController);
    service = module.get<IntentionsService>(IntentionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateIntentionDto = { type: 'test', serviceId: 1 };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockIntention);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockIntention]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockIntention);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateIntentionDto = { type: 'updated' };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockIntention, type: 'updated' });
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