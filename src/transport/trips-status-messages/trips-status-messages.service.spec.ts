import { Test, TestingModule } from '@nestjs/testing';
import { TripsStatusMessagesService } from './trips-status-messages.service';

describe('TripsStatusMessagesService', () => {
  let service: TripsStatusMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsStatusMessagesService],
    }).compile();

    service = module.get<TripsStatusMessagesService>(TripsStatusMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
