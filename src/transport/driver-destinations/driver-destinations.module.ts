import { Module } from '@nestjs/common';
import { DriverDestinations } from './entities/driver-destination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverDestinationsService } from './driver-destinations.service';
import { DriverDestinationsController } from './driver-destinations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverDestinations])],
  controllers: [DriverDestinationsController],
  providers: [DriverDestinationsService],
  exports: [TypeOrmModule.forFeature([DriverDestinations])],
})
export class DriverDestinationsModule {}
