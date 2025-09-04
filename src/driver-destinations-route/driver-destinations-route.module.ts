import { Module } from '@nestjs/common';
import { DriverDestinationsRouteService } from './driver-destinations-route.service';
import { DriverDestinationsRouteController } from './driver-destinations-route.controller';

@Module({
  controllers: [DriverDestinationsRouteController],
  providers: [DriverDestinationsRouteService],
})
export class DriverDestinationsRouteModule {}
