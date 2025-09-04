import { Module } from '@nestjs/common';
import { DriverManageTimingService } from './driver-manage-timing.service';
import { DriverManageTimingController } from './driver-manage-timing.controller';

@Module({
  controllers: [DriverManageTimingController],
  providers: [DriverManageTimingService],
})
export class DriverManageTimingModule {}
