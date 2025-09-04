import { Test, TestingModule } from '@nestjs/testing';
import { DriverUserMessagesService } from './driver-user-messages.service';

describe('DriverUserMessagesService', () => {
  let service: DriverUserMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverUserMessagesService],
    }).compile();

    service = module.get<DriverUserMessagesService>(DriverUserMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
