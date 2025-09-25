import { Test, TestingModule } from '@nestjs/testing';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';

describe('PlanPurchaseMasterService', () => {
  let service: PlanPurchaseMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanPurchaseMasterService],
    }).compile();

    service = module.get<PlanPurchaseMasterService>(PlanPurchaseMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
