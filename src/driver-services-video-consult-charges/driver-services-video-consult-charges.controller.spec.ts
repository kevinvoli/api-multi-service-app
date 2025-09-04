import { Test, TestingModule } from '@nestjs/testing';
import { DriverServicesVideoConsultChargesController } from './driver-services-video-consult-charges.controller';
import { DriverServicesVideoConsultChargesService } from './driver-services-video-consult-charges.service';

describe('DriverServicesVideoConsultChargesController', () => {
  let controller: DriverServicesVideoConsultChargesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverServicesVideoConsultChargesController],
      providers: [DriverServicesVideoConsultChargesService],
    }).compile();

    controller = module.get<DriverServicesVideoConsultChargesController>(DriverServicesVideoConsultChargesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
