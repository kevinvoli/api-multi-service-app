import { Test, TestingModule } from '@nestjs/testing';
import { TripOutStandingAmountController } from './trip-out-standing-amount.controller';
import { TripOutStandingAmountService } from './trip-out-standing-amount.service';

describe('TripOutStandingAmountController', () => {
  let controller: TripOutStandingAmountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripOutStandingAmountController],
      providers: [TripOutStandingAmountService],
    }).compile();

    controller = module.get<TripOutStandingAmountController>(TripOutStandingAmountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
