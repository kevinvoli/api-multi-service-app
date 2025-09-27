import { Test, TestingModule } from '@nestjs/testing';
import { ObjectRealisationController } from './object-realisation.controller';
import { ObjectRealisationService } from './object-realisation.service';
import { CreateObjectRealisationDto } from './dto/create-object-realisation.dto';
import { UpdateObjectRealisationDto } from './dto/update-object-realisation.dto';

const mockRealisation = { id: 1, quantite: 10 };

describe('ObjectRealisationController', () => {
  let controller: ObjectRealisationController;
  let service: ObjectRealisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectRealisationController],
      providers: [
        {
          provide: ObjectRealisationService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockRealisation),
            findAll: jest.fn().mockResolvedValue([mockRealisation]),
            findOne: jest.fn().mockResolvedValue(mockRealisation),
            update: jest.fn().mockResolvedValue({ ...mockRealisation, quantite: 20 }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<ObjectRealisationController>(ObjectRealisationController);
    service = module.get<ObjectRealisationService>(ObjectRealisationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateObjectRealisationDto = { quantite: 10 };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockRealisation);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockRealisation]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockRealisation);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateObjectRealisationDto = { quantite: 20 };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockRealisation, quantite: 20 });
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