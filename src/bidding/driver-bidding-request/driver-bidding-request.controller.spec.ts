import { Test, TestingModule } from '@nestjs/testing';
import { DriverBiddingRequestController } from './driver-bidding-request.controller';
import { DriverBiddingRequestService } from './driver-bidding-request.service';

describe('DriverBiddingRequestController', () => {
  let controller: DriverBiddingRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverBiddingRequestController],
      providers: [DriverBiddingRequestService],
    }).compile();

    controller = module.get<DriverBiddingRequestController>(DriverBiddingRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
