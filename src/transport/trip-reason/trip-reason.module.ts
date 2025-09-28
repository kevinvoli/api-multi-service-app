import { Module } from '@nestjs/common';
import { TripReasonService } from './trip-reason.service';
import { TripReasonController } from './trip-reason.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripReason } from './entities/trip-reason.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripReason])],
  controllers: [TripReasonController],
  providers: [TripReasonService],
})
export class TripReasonModule {}
