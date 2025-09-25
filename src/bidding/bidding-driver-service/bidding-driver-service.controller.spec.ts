import { Test, TestingModule } from '@nestjs/testing';
import { BiddingDriverServiceController } from './bidding-driver-service.controller';
import { BiddingDriverServiceService } from './bidding-driver-service.service';

describe('BiddingDriverServiceController', () => {
  let controller: BiddingDriverServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingDriverServiceController],
      providers: [BiddingDriverServiceService],
    }).compile();

    controller = module.get<BiddingDriverServiceController>(BiddingDriverServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
