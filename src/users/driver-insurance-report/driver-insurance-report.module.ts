import { Module } from '@nestjs/common';
import { DriverInsuranceReportService } from './driver-insurance-report.service';
import { DriverInsuranceReportController } from './driver-insurance-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverInsuranceReport } from './entities/driver-insurance-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverInsuranceReport])],
  controllers: [DriverInsuranceReportController],
  providers: [DriverInsuranceReportService],
})
export class DriverInsuranceReportModule {}
