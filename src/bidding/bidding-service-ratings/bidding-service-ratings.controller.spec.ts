import { Test, TestingModule } from '@nestjs/testing';
import { BiddingServiceRatingsController } from './bidding-service-ratings.controller';
import { BiddingServiceRatingsService } from './bidding-service-ratings.service';

describe('BiddingServiceRatingsController', () => {
  let controller: BiddingServiceRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingServiceRatingsController],
      providers: [BiddingServiceRatingsService],
    }).compile();

    controller = module.get<BiddingServiceRatingsController>(BiddingServiceRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
