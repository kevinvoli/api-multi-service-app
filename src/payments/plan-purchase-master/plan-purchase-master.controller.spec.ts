import { Test, TestingModule } from '@nestjs/testing';
import { PlanPurchaseMasterController } from './plan-purchase-master.controller';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';

describe('PlanPurchaseMasterController', () => {
  let controller: PlanPurchaseMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanPurchaseMasterController],
      providers: [PlanPurchaseMasterService],
    }).compile();

    controller = module.get<PlanPurchaseMasterController>(PlanPurchaseMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
