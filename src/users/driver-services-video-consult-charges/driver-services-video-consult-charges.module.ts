import { Module } from '@nestjs/common';
import { DriverServicesVideoConsultCharges } from './entities/driver-services-video-consult-charge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverServicesVideoConsultChargesService } from './driver-services-video-consult-charges.service';
import { DriverServicesVideoConsultChargesController } from './driver-services-video-consult-charges.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverServicesVideoConsultCharges])],
  controllers: [DriverServicesVideoConsultChargesController],
  providers: [DriverServicesVideoConsultChargesService],
  exports: [TypeOrmModule.forFeature([DriverServicesVideoConsultCharges])],
})
export class DriverServicesVideoConsultChargesModule {}
