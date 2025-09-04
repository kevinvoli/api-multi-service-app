import { Injectable } from '@nestjs/common';
import { CreateDriverLogReportDto } from './dto/create-driver-log-report.dto';
import { UpdateDriverLogReportDto } from './dto/update-driver-log-report.dto';

@Injectable()
export class DriverLogReportService {
  create(createDriverLogReportDto: CreateDriverLogReportDto) {
    return 'This action adds a new driverLogReport';
  }

  findAll() {
    return `This action returns all driverLogReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverLogReport`;
  }

  update(id: number, updateDriverLogReportDto: UpdateDriverLogReportDto) {
    return `This action updates a #${id} driverLogReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverLogReport`;
  }
}
