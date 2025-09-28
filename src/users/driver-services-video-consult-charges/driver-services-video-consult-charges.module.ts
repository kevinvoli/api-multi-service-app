import { Module } from '@nestjs/common';
import { DriverServicesVideoConsultChargesService } from './driver-services-video-consult-charges.service';
import { DriverServicesVideoConsultChargesController } from './driver-services-video-consult-charges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverServicesVideoConsultCharges } from './entities/driver-services-video-consult-charge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverServicesVideoConsultCharges])],
  controllers: [DriverServicesVideoConsultChargesController],
  providers: [DriverServicesVideoConsultChargesService],
})
export class DriverServicesVideoConsultChargesModule {}
