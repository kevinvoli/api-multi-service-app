import { Test, TestingModule } from '@nestjs/testing';
import { NotificationSoundController } from './notification-sound.controller';
import { NotificationSoundService } from './notification-sound.service';

describe('NotificationSoundController', () => {
  let controller: NotificationSoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationSoundController],
      providers: [NotificationSoundService],
    }).compile();

    controller = module.get<NotificationSoundController>(NotificationSoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
