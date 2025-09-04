import { Test, TestingModule } from '@nestjs/testing';
import { TripMessagesService } from './trip-messages.service';

describe('TripMessagesService', () => {
  let service: TripMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripMessagesService],
    }).compile();

    service = module.get<TripMessagesService>(TripMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
