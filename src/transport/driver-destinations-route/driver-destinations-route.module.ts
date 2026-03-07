import { Module } from '@nestjs/common';
import { DriverDestinationsRoute } from './entities/driver-destinations-route.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverDestinationsRouteService } from './driver-destinations-route.service';
import { DriverDestinationsRouteController } from './driver-destinations-route.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverDestinationsRoute])],
  controllers: [DriverDestinationsRouteController],
  providers: [DriverDestinationsRouteService],
  exports: [TypeOrmModule.forFeature([DriverDestinationsRoute])],
})
export class DriverDestinationsRouteModule {}
