import { Test, TestingModule } from '@nestjs/testing';
import { BiddingPostMediaController } from './bidding-post-media.controller';
import { BiddingPostMediaService } from './bidding-post-media.service';

describe('BiddingPostMediaController', () => {
  let controller: BiddingPostMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingPostMediaController],
      providers: [BiddingPostMediaService],
    }).compile();

    controller = module.get<BiddingPostMediaController>(BiddingPostMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
