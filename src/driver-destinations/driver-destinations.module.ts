import { Module } from '@nestjs/common';
import { DriverDestinationsService } from './driver-destinations.service';
import { DriverDestinationsController } from './driver-destinations.controller';

@Module({
  controllers: [DriverDestinationsController],
  providers: [DriverDestinationsService],
})
export class DriverDestinationsModule {}
