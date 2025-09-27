import { Test, TestingModule } from '@nestjs/testing';
import { CancelReasonController } from './cancel-reason.controller';
import { CancelReasonService } from './cancel-reason.service';
import { CreateCancelReasonDto } from './dto/create-cancel-reason.dto';
import { UpdateCancelReasonDto } from './dto/update-cancel-reason.dto';

const mockCancelReasonService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('CancelReasonController', () => {
  let controller: CancelReasonController;
  let service: CancelReasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CancelReasonController],
      providers: [
        {
          provide: CancelReasonService,
          useValue: mockCancelReasonService,
        },
      ],
    }).compile();

    controller = module.get<CancelReasonController>(CancelReasonController);
    service = module.get<CancelReasonService>(CancelReasonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new cancel reason', async () => {
      const createCancelReasonDto: CreateCancelReasonDto = {
        iDisplayOrder: 1,
        iSortId: 1,
        eStatus: 'Active',
        eAllowedCharge: 'No',
        vTitleEn: 'Test EN',
        vTitleFr: 'Test FR',
        eType: 'Ride',
        eFor: 'Passenger',
        eFly: '0',
      };
      const expectedResult = { iCancelReasonId: 1, ...createCancelReasonDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createCancelReasonDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createCancelReasonDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of cancel reasons', async () => {
      const expectedResult = [{ iCancelReasonId: 1, vTitleEn: 'Test' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single cancel reason', async () => {
      const id = '1';
      const expectedResult = { iCancelReasonId: 1, vTitleEn: 'Test' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a cancel reason', async () => {
      const id = '1';
      const updateCancelReasonDto: UpdateCancelReasonDto = { vTitleEn: 'Updated Test' };
      const expectedResult = { iCancelReasonId: 1, vTitleEn: 'Updated Test' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateCancelReasonDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateCancelReasonDto);
    });
  });

  describe('remove', () => {
    it('should remove a cancel reason', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});