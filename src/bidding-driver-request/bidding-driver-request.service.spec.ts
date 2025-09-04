import { Test, TestingModule } from '@nestjs/testing';
import { BiddingDriverRequestService } from './bidding-driver-request.service';

describe('BiddingDriverRequestService', () => {
  let service: BiddingDriverRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingDriverRequestService],
    }).compile();

    service = module.get<BiddingDriverRequestService>(BiddingDriverRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
