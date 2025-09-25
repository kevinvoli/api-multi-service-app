import { Test, TestingModule } from '@nestjs/testing';
import { DriverLocationAirportController } from './driver-location-airport.controller';
import { DriverLocationAirportService } from './driver-location-airport.service';

describe('DriverLocationAirportController', () => {
  let controller: DriverLocationAirportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverLocationAirportController],
      providers: [DriverLocationAirportService],
    }).compile();

    controller = module.get<DriverLocationAirportController>(DriverLocationAirportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
