import { Test, TestingModule } from '@nestjs/testing';
import { TripCallMaskingController } from './trip-call-masking.controller';
import { TripCallMaskingService } from './trip-call-masking.service';

describe('TripCallMaskingController', () => {
  let controller: TripCallMaskingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripCallMaskingController],
      providers: [TripCallMaskingService],
    }).compile();

    controller = module.get<TripCallMaskingController>(TripCallMaskingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
