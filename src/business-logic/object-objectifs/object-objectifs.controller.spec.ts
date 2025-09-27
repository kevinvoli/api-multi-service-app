import { Test, TestingModule } from '@nestjs/testing';
import { ObjectObjectifsController } from './object-objectifs.controller';
import { ObjectObjectifsService } from './object-objectifs.service';
import { CreateObjectObjectifDto } from './dto/create-object-objectif.dto';
import { UpdateObjectObjectifDto } from './dto/update-object-objectif.dto';

const mockObjectif = { id: 1, quantite: 100 };

describe('ObjectObjectifsController', () => {
  let controller: ObjectObjectifsController;
  let service: ObjectObjectifsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectObjectifsController],
      providers: [
        {
          provide: ObjectObjectifsService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockObjectif),
            findAll: jest.fn().mockResolvedValue([mockObjectif]),
            findOne: jest.fn().mockResolvedValue(mockObjectif),
            update: jest.fn().mockResolvedValue({ ...mockObjectif, quantite: 200 }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<ObjectObjectifsController>(ObjectObjectifsController);
    service = module.get<ObjectObjectifsService>(ObjectObjectifsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateObjectObjectifDto = { quantite: 100 };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockObjectif);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockObjectif]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockObjectif);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateObjectObjectifDto = { quantite: 200 };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockObjectif, quantite: 200 });
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