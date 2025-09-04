import { Test, TestingModule } from '@nestjs/testing';
import { DriverVehicleController } from './driver-vehicle.controller';
import { DriverVehicleService } from './driver-vehicle.service';

describe('DriverVehicleController', () => {
  let controller: DriverVehicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverVehicleController],
      providers: [DriverVehicleService],
    }).compile();

    controller = module.get<DriverVehicleController>(DriverVehicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
