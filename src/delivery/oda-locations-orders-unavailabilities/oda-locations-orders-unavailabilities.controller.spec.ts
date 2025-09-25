import { Test, TestingModule } from '@nestjs/testing';
import { OdaLocationsOrdersUnavailabilitiesController } from './oda-locations-orders-unavailabilities.controller';
import { OdaLocationsOrdersUnavailabilitiesService } from './oda-locations-orders-unavailabilities.service';

describe('OdaLocationsOrdersUnavailabilitiesController', () => {
  let controller: OdaLocationsOrdersUnavailabilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaLocationsOrdersUnavailabilitiesController],
      providers: [OdaLocationsOrdersUnavailabilitiesService],
    }).compile();

    controller = module.get<OdaLocationsOrdersUnavailabilitiesController>(OdaLocationsOrdersUnavailabilitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
