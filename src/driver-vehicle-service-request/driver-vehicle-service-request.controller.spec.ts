import { Test, TestingModule } from '@nestjs/testing';
import { DriverVehicleServiceRequestController } from './driver-vehicle-service-request.controller';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';

describe('DriverVehicleServiceRequestController', () => {
  let controller: DriverVehicleServiceRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverVehicleServiceRequestController],
      providers: [DriverVehicleServiceRequestService],
    }).compile();

    controller = module.get<DriverVehicleServiceRequestController>(DriverVehicleServiceRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
