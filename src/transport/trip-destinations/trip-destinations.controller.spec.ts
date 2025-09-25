import { Test, TestingModule } from '@nestjs/testing';
import { TripDestinationsController } from './trip-destinations.controller';
import { TripDestinationsService } from './trip-destinations.service';

describe('TripDestinationsController', () => {
  let controller: TripDestinationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripDestinationsController],
      providers: [TripDestinationsService],
    }).compile();

    controller = module.get<TripDestinationsController>(TripDestinationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
