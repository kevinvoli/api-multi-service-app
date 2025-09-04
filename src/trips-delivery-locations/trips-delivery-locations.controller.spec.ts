import { Test, TestingModule } from '@nestjs/testing';
import { TripsDeliveryLocationsController } from './trips-delivery-locations.controller';
import { TripsDeliveryLocationsService } from './trips-delivery-locations.service';

describe('TripsDeliveryLocationsController', () => {
  let controller: TripsDeliveryLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsDeliveryLocationsController],
      providers: [TripsDeliveryLocationsService],
    }).compile();

    controller = module.get<TripsDeliveryLocationsController>(TripsDeliveryLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
