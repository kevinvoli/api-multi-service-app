import { Test, TestingModule } from '@nestjs/testing';
import { TripsLocationsController } from './trips-locations.controller';
import { TripsLocationsService } from './trips-locations.service';

describe('TripsLocationsController', () => {
  let controller: TripsLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsLocationsController],
      providers: [TripsLocationsService],
    }).compile();

    controller = module.get<TripsLocationsController>(TripsLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
