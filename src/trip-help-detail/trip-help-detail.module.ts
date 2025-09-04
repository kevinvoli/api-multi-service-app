import { Module } from '@nestjs/common';
import { TripHelpDetailService } from './trip-help-detail.service';
import { TripHelpDetailController } from './trip-help-detail.controller';

@Module({
  controllers: [TripHelpDetailController],
  providers: [TripHelpDetailService],
})
export class TripHelpDetailModule {}
