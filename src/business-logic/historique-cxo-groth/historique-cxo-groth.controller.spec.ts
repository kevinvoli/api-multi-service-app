import { Test, TestingModule } from '@nestjs/testing';
import { HistoriqueCxoGrothController } from './historique-cxo-groth.controller';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';
import { CreateHistoriqueCxoGrothDto } from './dto/create-historique-cxo-groth.dto';
import { UpdateHistoriqueCxoGrothDto } from './dto/update-historique-cxo-groth.dto';

const mockHistorique = { id: 1, ios: 10, android: 20 };

describe('HistoriqueCxoGrothController', () => {
  let controller: HistoriqueCxoGrothController;
  let service: HistoriqueCxoGrothService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoriqueCxoGrothController],
      providers: [
        {
          provide: HistoriqueCxoGrothService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockHistorique),
            findAll: jest.fn().mockResolvedValue([mockHistorique]),
            findOne: jest.fn().mockResolvedValue(mockHistorique),
            update: jest.fn().mockResolvedValue({ ...mockHistorique, ios: 15 }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<HistoriqueCxoGrothController>(HistoriqueCxoGrothController);
    service = module.get<HistoriqueCxoGrothService>(HistoriqueCxoGrothService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateHistoriqueCxoGrothDto = { ios: 10, android: 20 };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockHistorique);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockHistorique]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockHistorique);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateHistoriqueCxoGrothDto = { ios: 15 };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockHistorique, ios: 15 });
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