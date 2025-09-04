import { Test, TestingModule } from '@nestjs/testing';
import { BiddingServiceController } from './bidding-service.controller';
import { BiddingServiceService } from './bidding-service.service';

describe('BiddingServiceController', () => {
  let controller: BiddingServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingServiceController],
      providers: [BiddingServiceService],
    }).compile();

    controller = module.get<BiddingServiceController>(BiddingServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
