import { Test, TestingModule } from '@nestjs/testing';
import { BiddingServiceRatingsService } from './bidding-service-ratings.service';

describe('BiddingServiceRatingsService', () => {
  let service: BiddingServiceRatingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingServiceRatingsService],
    }).compile();

    service = module.get<BiddingServiceRatingsService>(BiddingServiceRatingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
