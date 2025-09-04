import { Test, TestingModule } from '@nestjs/testing';
import { PassengerRequestsService } from './passenger-requests.service';

describe('PassengerRequestsService', () => {
  let service: PassengerRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassengerRequestsService],
    }).compile();

    service = module.get<PassengerRequestsService>(PassengerRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
