import { Test, TestingModule } from '@nestjs/testing';
import { DriverVehicleService } from './driver-vehicle.service';

describe('DriverVehicleService', () => {
  let service: DriverVehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverVehicleService],
    }).compile();

    service = module.get<DriverVehicleService>(DriverVehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
