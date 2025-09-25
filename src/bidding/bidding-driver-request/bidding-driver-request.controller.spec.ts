import { Test, TestingModule } from '@nestjs/testing';
import { BiddingDriverRequestController } from './bidding-driver-request.controller';
import { BiddingDriverRequestService } from './bidding-driver-request.service';

describe('BiddingDriverRequestController', () => {
  let controller: BiddingDriverRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingDriverRequestController],
      providers: [BiddingDriverRequestService],
    }).compile();

    controller = module.get<BiddingDriverRequestController>(BiddingDriverRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
