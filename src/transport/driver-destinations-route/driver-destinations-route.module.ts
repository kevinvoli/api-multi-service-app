import { Module } from '@nestjs/common';
import { DriverDestinationsRouteService } from './driver-destinations-route.service';
import { DriverDestinationsRouteController } from './driver-destinations-route.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverDestinationsRoute } from './entities/driver-destinations-route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverDestinationsRoute])],
  controllers: [DriverDestinationsRouteController],
  providers: [DriverDestinationsRouteService],
})
export class DriverDestinationsRouteModule {}
