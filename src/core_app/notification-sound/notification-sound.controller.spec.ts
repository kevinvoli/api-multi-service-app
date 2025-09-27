import { Test, TestingModule } from '@nestjs/testing';
import { NotificationSoundController } from './notification-sound.controller';
import { NotificationSoundService } from './notification-sound.service';
import { CreateNotificationSoundDto } from './dto/create-notification-sound.dto';
import { UpdateNotificationSoundDto } from './dto/update-notification-sound.dto';

const mockNotificationSoundService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('NotificationSoundController', () => {
  let controller: NotificationSoundController;
  let service: NotificationSoundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationSoundController],
      providers: [
        {
          provide: NotificationSoundService,
          useValue: mockNotificationSoundService,
        },
      ],
    }).compile();

    controller = module.get<NotificationSoundController>(NotificationSoundController);
    service = module.get<NotificationSoundService>(NotificationSoundService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new notification sound', async () => {
      const createNotificationSoundDto: CreateNotificationSoundDto = {
        vFileName: 'test.mp3',
        eSoundFor: 'User',
        eAdminDisplay: 'Yes',
        eStatus: 'Active',
        eIsSelected: 'No',
        eDefault: 'No',
      };
      const expectedResult = { iSoundId: 1, ...createNotificationSoundDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createNotificationSoundDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createNotificationSoundDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of notification sounds', async () => {
      const expectedResult = [{ iSoundId: 1, vFileName: 'test.mp3' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single notification sound', async () => {
      const id = '1';
      const expectedResult = { iSoundId: 1, vFileName: 'test.mp3' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a notification sound', async () => {
      const id = '1';
      const updateNotificationSoundDto: UpdateNotificationSoundDto = { vFileName: 'updated.mp3' };
      const expectedResult = { iSoundId: 1, vFileName: 'updated.mp3' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateNotificationSoundDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateNotificationSoundDto);
    });
  });

  describe('remove', () => {
    it('should remove a notification sound', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});