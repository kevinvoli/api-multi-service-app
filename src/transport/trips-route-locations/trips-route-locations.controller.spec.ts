import { Test, TestingModule } from '@nestjs/testing';
import { TripsRouteLocationsController } from './trips-route-locations.controller';
import { TripsRouteLocationsService } from './trips-route-locations.service';

describe('TripsRouteLocationsController', () => {
  let controller: TripsRouteLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsRouteLocationsController],
      providers: [TripsRouteLocationsService],
    }).compile();

    controller = module.get<TripsRouteLocationsController>(TripsRouteLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
