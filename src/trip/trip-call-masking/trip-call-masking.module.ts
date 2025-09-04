import { Module } from '@nestjs/common';
import { TripCallMaskingService } from './trip-call-masking.service';
import { TripCallMaskingController } from './trip-call-masking.controller';

@Module({
  controllers: [TripCallMaskingController],
  providers: [TripCallMaskingService],
})
export class TripCallMaskingModule {}
