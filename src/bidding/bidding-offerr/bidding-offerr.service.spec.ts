import { Test, TestingModule } from '@nestjs/testing';
import { BiddingOfferrService } from './bidding-offerr.service';

describe('BiddingOfferrService', () => {
  let service: BiddingOfferrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingOfferrService],
    }).compile();

    service = module.get<BiddingOfferrService>(BiddingOfferrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
