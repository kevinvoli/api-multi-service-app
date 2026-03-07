import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripHelpDetailService } from './trip-help-detail.service';
import { TripHelpDetailController } from './trip-help-detail.controller';

import { TripDestinations } from './entities/trip-help-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripDestinations])],
  controllers: [TripHelpDetailController],
  providers: [TripHelpDetailService],
  exports: [TypeOrmModule.forFeature([TripDestinations])],
})
export class TripHelpDetailModule {}
