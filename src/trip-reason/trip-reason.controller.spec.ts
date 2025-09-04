import { Test, TestingModule } from '@nestjs/testing';
import { TripReasonController } from './trip-reason.controller';
import { TripReasonService } from './trip-reason.service';

describe('TripReasonController', () => {
  let controller: TripReasonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripReasonController],
      providers: [TripReasonService],
    }).compile();

    controller = module.get<TripReasonController>(TripReasonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
