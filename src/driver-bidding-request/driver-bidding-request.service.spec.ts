import { Test, TestingModule } from '@nestjs/testing';
import { DriverBiddingRequestService } from './driver-bidding-request.service';

describe('DriverBiddingRequestService', () => {
  let service: DriverBiddingRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverBiddingRequestService],
    }).compile();

    service = module.get<DriverBiddingRequestService>(DriverBiddingRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
