import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverInsuranceReportService } from './driver-insurance-report.service';
import { CreateDriverInsuranceReportDto } from './dto/create-driver-insurance-report.dto';
import { UpdateDriverInsuranceReportDto } from './dto/update-driver-insurance-report.dto';

@Controller('driver-insurance-report')
export class DriverInsuranceReportController {
  constructor(private readonly driverInsuranceReportService: DriverInsuranceReportService) {}

  @Post()
  create(@Body() createDriverInsuranceReportDto: CreateDriverInsuranceReportDto) {
    return this.driverInsuranceReportService.create(createDriverInsuranceReportDto);
  }

  @Get()
  findAll() {
    return this.driverInsuranceReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverInsuranceReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverInsuranceReportDto: UpdateDriverInsuranceReportDto) {
    return this.driverInsuranceReportService.update(+id, updateDriverInsuranceReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverInsuranceReportService.remove(+id);
  }
}
