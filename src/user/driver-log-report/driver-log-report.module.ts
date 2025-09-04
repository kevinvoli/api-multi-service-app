import { Module } from '@nestjs/common';
import { DriverLogReportService } from './driver-log-report.service';
import { DriverLogReportController } from './driver-log-report.controller';

@Module({
  controllers: [DriverLogReportController],
  providers: [DriverLogReportService],
})
export class DriverLogReportModule {}
