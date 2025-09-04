import { Test, TestingModule } from '@nestjs/testing';
import { BiddingPostService } from './bidding-post.service';

describe('BiddingPostService', () => {
  let service: BiddingPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingPostService],
    }).compile();

    service = module.get<BiddingPostService>(BiddingPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
