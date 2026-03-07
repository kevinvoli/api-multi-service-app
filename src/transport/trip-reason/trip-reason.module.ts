import { Module } from '@nestjs/common';
import { TripReason } from './entities/trip-reason.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripReasonService } from './trip-reason.service';
import { TripReasonController } from './trip-reason.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripReason])],
  controllers: [TripReasonController],
  providers: [TripReasonService],
  exports: [TypeOrmModule.forFeature([TripReason])],
})
export class TripReasonModule {}
