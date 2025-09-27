import { Test, TestingModule } from '@nestjs/testing';
import { ObjectProspectionsController } from './object-prospections.controller';
import { ObjectProspectionsService } from './object-prospections.service';
import { CreateObjectProspectionDto } from './dto/create-object-prospection.dto';
import { UpdateObjectProspectionDto } from './dto/update-object-prospection.dto';

const mockProspection = { id: 1, quantite: 50 };

describe('ObjectProspectionsController', () => {
  let controller: ObjectProspectionsController;
  let service: ObjectProspectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectProspectionsController],
      providers: [
        {
          provide: ObjectProspectionsService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockProspection),
            findAll: jest.fn().mockResolvedValue([mockProspection]),
            findOne: jest.fn().mockResolvedValue(mockProspection),
            update: jest.fn().mockResolvedValue({ ...mockProspection, quantite: 75 }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<ObjectProspectionsController>(ObjectProspectionsController);
    service = module.get<ObjectProspectionsService>(ObjectProspectionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should call service.create with the correct dto', async () => {
      const createDto: CreateObjectProspectionDto = { quantite: 50 };
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockProspection);
    });
  });

  describe('findAll()', () => {
    it('should call service.findAll', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockProspection]);
    });
  });

  describe('findOne()', () => {
    it('should call service.findOne with the correct id', async () => {
      const id = '1';
      const result = await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mockProspection);
    });
  });

  describe('update()', () => {
    it('should call service.update with the correct id and dto', async () => {
      const id = '1';
      const updateDto: UpdateObjectProspectionDto = { quantite: 75 };
      const result = await controller.update(id, updateDto);
      expect(service.update).toHaveBeenCalledWith(+id, updateDto);
      expect(result).toEqual({ ...mockProspection, quantite: 75 });
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