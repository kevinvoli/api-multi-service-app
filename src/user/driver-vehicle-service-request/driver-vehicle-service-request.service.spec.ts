import { Test, TestingModule } from '@nestjs/testing';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';

describe('DriverVehicleServiceRequestService', () => {
  let service: DriverVehicleServiceRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverVehicleServiceRequestService],
    }).compile();

    service = module.get<DriverVehicleServiceRequestService>(DriverVehicleServiceRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
