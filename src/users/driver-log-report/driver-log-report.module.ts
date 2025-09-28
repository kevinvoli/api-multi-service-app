import { Module } from '@nestjs/common';
import { DriverLogReportService } from './driver-log-report.service';
import { DriverLogReportController } from './driver-log-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverLogReport } from './entities/driver-log-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverLogReport])],
  controllers: [DriverLogReportController],
  providers: [DriverLogReportService],
})
export class DriverLogReportModule {}
