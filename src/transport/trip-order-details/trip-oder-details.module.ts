import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripOderDetailsService } from './trip-oder-details.service';
import { TripOderDetailsController } from './trip-oder-details.controller';

import { TripOrderDetails } from './entities/trip-order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripOrderDetails])],
  controllers: [TripOderDetailsController],
  providers: [TripOderDetailsService],
  exports: [TypeOrmModule.forFeature([TripOrderDetails])],
})
export class TripOderDetailsModule {}
