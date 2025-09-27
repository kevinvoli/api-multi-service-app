import { Test, TestingModule } from '@nestjs/testing';
import { PushnotificationLogController } from './pushnotification-log.controller';
import { PushnotificationLogService } from './pushnotification-log.service';
import { CreatePushnotificationLogDto } from './dto/create-pushnotification-log.dto';
import { UpdatePushnotificationLogDto } from './dto/update-pushnotification-log.dto';

const mockPushnotificationLogService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('PushnotificationLogController', () => {
  let controller: PushnotificationLogController;
  let service: PushnotificationLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushnotificationLogController],
      providers: [
        {
          provide: PushnotificationLogService,
          useValue: mockPushnotificationLogService,
        },
      ],
    }).compile();

    controller = module.get<PushnotificationLogController>(PushnotificationLogController);
    service = module.get<PushnotificationLogService>(PushnotificationLogService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new pushnotification log', async () => {
      const createPushnotificationLogDto: CreatePushnotificationLogDto = {
        eUserType: 'rider',
        iUserId: 1,
        tMessage: 'Test message',
        dDateTime: new Date(),
        ipAddress: '127.0.0.1',
      };
      const expectedResult = { iPushnotificationId: 1, ...createPushnotificationLogDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createPushnotificationLogDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createPushnotificationLogDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of pushnotification logs', async () => {
      const expectedResult = [{ iPushnotificationId: 1, tMessage: 'Test message' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single pushnotification log', async () => {
      const id = '1';
      const expectedResult = { iPushnotificationId: 1, tMessage: 'Test message' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a pushnotification log', async () => {
      const id = '1';
      const updatePushnotificationLogDto: UpdatePushnotificationLogDto = { tMessage: 'Updated message' };
      const expectedResult = { iPushnotificationId: 1, tMessage: 'Updated message' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updatePushnotificationLogDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updatePushnotificationLogDto);
    });
  });

  describe('remove', () => {
    it('should remove a pushnotification log', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});