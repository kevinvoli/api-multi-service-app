import { Test, TestingModule } from '@nestjs/testing';
import { BiddingDriverServiceService } from './bidding-driver-service.service';

describe('BiddingDriverServiceService', () => {
  let service: BiddingDriverServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingDriverServiceService],
    }).compile();

    service = module.get<BiddingDriverServiceService>(BiddingDriverServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
