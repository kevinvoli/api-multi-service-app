import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverServicesVideoConsultChargesService } from './driver-services-video-consult-charges.service';
import { CreateDriverServicesVideoConsultChargeDto } from './dto/create-driver-services-video-consult-charge.dto';
import { UpdateDriverServicesVideoConsultChargeDto } from './dto/update-driver-services-video-consult-charge.dto';

@Controller('driver-services-video-consult-charges')
export class DriverServicesVideoConsultChargesController {
  constructor(private readonly driverServicesVideoConsultChargesService: DriverServicesVideoConsultChargesService) {}

  @Post()
  create(@Body() createDriverServicesVideoConsultChargeDto: CreateDriverServicesVideoConsultChargeDto) {
    return this.driverServicesVideoConsultChargesService.create(createDriverServicesVideoConsultChargeDto);
  }

  @Get()
  findAll() {
    return this.driverServicesVideoConsultChargesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverServicesVideoConsultChargesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverServicesVideoConsultChargeDto: UpdateDriverServicesVideoConsultChargeDto) {
    return this.driverServicesVideoConsultChargesService.update(+id, updateDriverServicesVideoConsultChargeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverServicesVideoConsultChargesService.remove(+id);
  }
}
