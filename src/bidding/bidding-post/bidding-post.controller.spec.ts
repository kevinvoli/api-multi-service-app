import { Test, TestingModule } from '@nestjs/testing';
import { BiddingPostController } from './bidding-post.controller';
import { BiddingPostService } from './bidding-post.service';

describe('BiddingPostController', () => {
  let controller: BiddingPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingPostController],
      providers: [BiddingPostService],
    }).compile();

    controller = module.get<BiddingPostController>(BiddingPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
