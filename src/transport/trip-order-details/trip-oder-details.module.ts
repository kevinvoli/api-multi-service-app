import { Module } from '@nestjs/common';
import { TripOderDetailsService } from './trip-oder-details.service';
import { TripOderDetailsController } from './trip-oder-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripOrderDetails } from './entities/trip-order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripOrderDetails])],
  controllers: [TripOderDetailsController],
  providers: [TripOderDetailsService],
})
export class TripOderDetailsModule {}
