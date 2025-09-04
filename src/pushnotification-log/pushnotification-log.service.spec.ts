import { Test, TestingModule } from '@nestjs/testing';
import { PushnotificationLogService } from './pushnotification-log.service';

describe('PushnotificationLogService', () => {
  let service: PushnotificationLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushnotificationLogService],
    }).compile();

    service = module.get<PushnotificationLogService>(PushnotificationLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
