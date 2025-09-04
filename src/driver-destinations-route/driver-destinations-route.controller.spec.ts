import { Test, TestingModule } from '@nestjs/testing';
import { DriverDestinationsRouteController } from './driver-destinations-route.controller';
import { DriverDestinationsRouteService } from './driver-destinations-route.service';

describe('DriverDestinationsRouteController', () => {
  let controller: DriverDestinationsRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverDestinationsRouteController],
      providers: [DriverDestinationsRouteService],
    }).compile();

    controller = module.get<DriverDestinationsRouteController>(DriverDestinationsRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
