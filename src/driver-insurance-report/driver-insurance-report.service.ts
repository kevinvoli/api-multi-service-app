import { Injectable } from '@nestjs/common';
import { CreateDriverInsuranceReportDto } from './dto/create-driver-insurance-report.dto';
import { UpdateDriverInsuranceReportDto } from './dto/update-driver-insurance-report.dto';

@Injectable()
export class DriverInsuranceReportService {
  create(createDriverInsuranceReportDto: CreateDriverInsuranceReportDto) {
    return 'This action adds a new driverInsuranceReport';
  }

  findAll() {
    return `This action returns all driverInsuranceReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverInsuranceReport`;
  }

  update(id: number, updateDriverInsuranceReportDto: UpdateDriverInsuranceReportDto) {
    return `This action updates a #${id} driverInsuranceReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverInsuranceReport`;
  }
}
