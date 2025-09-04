import { Module } from '@nestjs/common';
import { DriverServicesVideoConsultChargesService } from './driver-services-video-consult-charges.service';
import { DriverServicesVideoConsultChargesController } from './driver-services-video-consult-charges.controller';

@Module({
  controllers: [DriverServicesVideoConsultChargesController],
  providers: [DriverServicesVideoConsultChargesService],
})
export class DriverServicesVideoConsultChargesModule {}
