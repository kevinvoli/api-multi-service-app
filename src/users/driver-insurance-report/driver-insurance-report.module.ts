import { Module } from '@nestjs/common';
import { DriverInsuranceReport } from './entities/driver-insurance-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverInsuranceReportService } from './driver-insurance-report.service';
import { DriverInsuranceReportController } from './driver-insurance-report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverInsuranceReport])],
  controllers: [DriverInsuranceReportController],
  providers: [DriverInsuranceReportService],
  exports: [TypeOrmModule.forFeature([DriverInsuranceReport])],
})
export class DriverInsuranceReportModule {}
