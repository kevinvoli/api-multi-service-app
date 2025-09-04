import { Test, TestingModule } from '@nestjs/testing';
import { BiddingServiceService } from './bidding-service.service';

describe('BiddingServiceService', () => {
  let service: BiddingServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingServiceService],
    }).compile();

    service = module.get<BiddingServiceService>(BiddingServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
