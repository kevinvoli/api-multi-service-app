import { Module } from '@nestjs/common';
import { DriverRequestService } from './driver-request.service';
import { DriverRequestController } from './driver-request.controller';

@Module({
  controllers: [DriverRequestController],
  providers: [DriverRequestService],
})
export class DriverRequestModule {}
