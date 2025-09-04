import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmergencyCantactDataService } from './emergency-cantact-data.service';
import { CreateEmergencyCantactDatumDto } from './dto/create-emergency-cantact-datum.dto';
import { UpdateEmergencyCantactDatumDto } from './dto/update-emergency-cantact-datum.dto';

@Controller('emergency-cantact-data')
export class EmergencyCantactDataController {
  constructor(private readonly emergencyCantactDataService: EmergencyCantactDataService) {}

  @Post()
  create(@Body() createEmergencyCantactDatumDto: CreateEmergencyCantactDatumDto) {
    return this.emergencyCantactDataService.create(createEmergencyCantactDatumDto);
  }

  @Get()
  findAll() {
    return this.emergencyCantactDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emergencyCantactDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmergencyCantactDatumDto: UpdateEmergencyCantactDatumDto) {
    return this.emergencyCantactDataService.update(+id, updateEmergencyCantactDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emergencyCantactDataService.remove(+id);
  }
}
