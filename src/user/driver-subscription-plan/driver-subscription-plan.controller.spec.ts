import { Test, TestingModule } from '@nestjs/testing';
import { DriverSubscriptionPlanController } from './driver-subscription-plan.controller';
import { DriverSubscriptionPlanService } from './driver-subscription-plan.service';

describe('DriverSubscriptionPlanController', () => {
  let controller: DriverSubscriptionPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverSubscriptionPlanController],
      providers: [DriverSubscriptionPlanService],
    }).compile();

    controller = module.get<DriverSubscriptionPlanController>(DriverSubscriptionPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
