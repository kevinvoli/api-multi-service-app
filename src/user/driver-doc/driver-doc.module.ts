import { Module } from '@nestjs/common';
import { DriverDocService } from './driver-doc.service';
import { DriverDocController } from './driver-doc.controller';

@Module({
  controllers: [DriverDocController],
  providers: [DriverDocService],
})
export class DriverDocModule {}
