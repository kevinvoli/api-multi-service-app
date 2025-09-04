import { Module } from '@nestjs/common';
import { TripReasonService } from './trip-reason.service';
import { TripReasonController } from './trip-reason.controller';

@Module({
  controllers: [TripReasonController],
  providers: [TripReasonService],
})
export class TripReasonModule {}
