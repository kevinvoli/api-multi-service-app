import { Module } from '@nestjs/common';
import { DriverDestinationsService } from './driver-destinations.service';
import { DriverDestinationsController } from './driver-destinations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverDestinations } from './entities/driver-destination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverDestinations])],
  controllers: [DriverDestinationsController],
  providers: [DriverDestinationsService],
})
export class DriverDestinationsModule {}
