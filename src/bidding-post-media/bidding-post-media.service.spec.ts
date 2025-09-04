import { Test, TestingModule } from '@nestjs/testing';
import { BiddingPostMediaService } from './bidding-post-media.service';

describe('BiddingPostMediaService', () => {
  let service: BiddingPostMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingPostMediaService],
    }).compile();

    service = module.get<BiddingPostMediaService>(BiddingPostMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
