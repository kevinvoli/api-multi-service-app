import { Test, TestingModule } from '@nestjs/testing';
import { NotificationSoundService } from './notification-sound.service';

describe('NotificationSoundService', () => {
  let service: NotificationSoundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationSoundService],
    }).compile();

    service = module.get<NotificationSoundService>(NotificationSoundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
