import { Test, TestingModule } from '@nestjs/testing';
import { TempTripOrderDetailsController } from './temp-trip-order-details.controller';
import { TempTripOrderDetailsService } from './temp-trip-order-details.service';

describe('TempTripOrderDetailsController', () => {
  let controller: TempTripOrderDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TempTripOrderDetailsController],
      providers: [TempTripOrderDetailsService],
    }).compile();

    controller = module.get<TempTripOrderDetailsController>(TempTripOrderDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
