import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverLogReportService } from './driver-log-report.service';
import { CreateDriverLogReportDto } from './dto/create-driver-log-report.dto';
import { UpdateDriverLogReportDto } from './dto/update-driver-log-report.dto';

@Controller('driver-log-report')
export class DriverLogReportController {
  constructor(private readonly driverLogReportService: DriverLogReportService) {}

  @Post()
  create(@Body() createDriverLogReportDto: CreateDriverLogReportDto) {
    return this.driverLogReportService.create(createDriverLogReportDto);
  }

  @Get()
  findAll() {
    return this.driverLogReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverLogReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverLogReportDto: UpdateDriverLogReportDto) {
    return this.driverLogReportService.update(+id, updateDriverLogReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverLogReportService.remove(+id);
  }
}
