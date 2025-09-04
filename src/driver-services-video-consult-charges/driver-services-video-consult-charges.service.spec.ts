import { Test, TestingModule } from '@nestjs/testing';
import { DriverServicesVideoConsultChargesService } from './driver-services-video-consult-charges.service';

describe('DriverServicesVideoConsultChargesService', () => {
  let service: DriverServicesVideoConsultChargesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverServicesVideoConsultChargesService],
    }).compile();

    service = module.get<DriverServicesVideoConsultChargesService>(DriverServicesVideoConsultChargesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
