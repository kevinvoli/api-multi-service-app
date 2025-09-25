import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverPreferencesService } from './driver-preferences.service';
import { CreateDriverPreferenceDto } from './dto/create-driver-preference.dto';
import { UpdateDriverPreferenceDto } from './dto/update-driver-preference.dto';

@Controller('driver-preferences')
export class DriverPreferencesController {
  constructor(private readonly driverPreferencesService: DriverPreferencesService) {}

  @Post()
  create(@Body() createDriverPreferenceDto: CreateDriverPreferenceDto) {
    return this.driverPreferencesService.create(createDriverPreferenceDto);
  }

  @Get()
  findAll() {
    return this.driverPreferencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverPreferencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverPreferenceDto: UpdateDriverPreferenceDto) {
    return this.driverPreferencesService.update(+id, updateDriverPreferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverPreferencesService.remove(+id);
  }
}
