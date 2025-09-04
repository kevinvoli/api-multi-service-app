import { Module } from '@nestjs/common';
import { DriverInsuranceReportService } from './driver-insurance-report.service';
import { DriverInsuranceReportController } from './driver-insurance-report.controller';

@Module({
  controllers: [DriverInsuranceReportController],
  providers: [DriverInsuranceReportService],
})
export class DriverInsuranceReportModule {}
