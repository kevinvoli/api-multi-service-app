import { Module } from '@nestjs/common';
import { DriverLogReport } from './entities/driver-log-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverLogReportService } from './driver-log-report.service';
import { DriverLogReportController } from './driver-log-report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverLogReport])],
  controllers: [DriverLogReportController],
  providers: [DriverLogReportService],
  exports: [TypeOrmModule.forFeature([DriverLogReport])],
})
export class DriverLogReportModule {}
