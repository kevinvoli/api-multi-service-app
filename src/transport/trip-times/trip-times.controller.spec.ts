import { Test, TestingModule } from '@nestjs/testing';
import { TripTimesController } from './trip-times.controller';
import { TripTimesService } from './trip-times.service';

describe('TripTimesController', () => {
  let controller: TripTimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripTimesController],
      providers: [TripTimesService],
    }).compile();

    controller = module.get<TripTimesController>(TripTimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
