import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverPreferencesService } from './driver-preferences.service';
import { CreateDriverPreferenceDto } from './dto/create-driver-preference.dto';
import { UpdateDriverPreferenceDto } from './dto/update-driver-preference.dto';

@Controller('driver-preferences')
export class DriverPreferencesController {
  constructor(private readonly driverPreferencesService: DriverPreferencesService) {}

  @Post()
  async create(@Body() createDriverPreferenceDto: CreateDriverPreferenceDto) {
    return await this.driverPreferencesService.create(createDriverPreferenceDto);
  }

  @Get()
  async findAll() {
    return await this.driverPreferencesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.driverPreferencesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDriverPreferenceDto: UpdateDriverPreferenceDto) {
    return await this.driverPreferencesService.update(+id, updateDriverPreferenceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.driverPreferencesService.remove(+id);
  }
}
