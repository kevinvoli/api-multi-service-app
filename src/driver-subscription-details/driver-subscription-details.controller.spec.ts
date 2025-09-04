import { Test, TestingModule } from '@nestjs/testing';
import { DriverSubscriptionDetailsController } from './driver-subscription-details.controller';
import { DriverSubscriptionDetailsService } from './driver-subscription-details.service';

describe('DriverSubscriptionDetailsController', () => {
  let controller: DriverSubscriptionDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverSubscriptionDetailsController],
      providers: [DriverSubscriptionDetailsService],
    }).compile();

    controller = module.get<DriverSubscriptionDetailsController>(DriverSubscriptionDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
