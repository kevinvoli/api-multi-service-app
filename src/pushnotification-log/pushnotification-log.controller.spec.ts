import { Test, TestingModule } from '@nestjs/testing';
import { PushnotificationLogController } from './pushnotification-log.controller';
import { PushnotificationLogService } from './pushnotification-log.service';

describe('PushnotificationLogController', () => {
  let controller: PushnotificationLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushnotificationLogController],
      providers: [PushnotificationLogService],
    }).compile();

    controller = module.get<PushnotificationLogController>(PushnotificationLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
