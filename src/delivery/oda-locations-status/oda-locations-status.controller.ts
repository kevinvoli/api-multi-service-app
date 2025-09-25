import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaLocationsStatusService } from './oda-locations-status.service';
import { CreateOdaLocationsStatusDto } from './dto/create-oda-locations-status.dto';
import { UpdateOdaLocationsStatusDto } from './dto/update-oda-locations-status.dto';

@Controller('oda-locations-status')
export class OdaLocationsStatusController {
  constructor(private readonly odaLocationsStatusService: OdaLocationsStatusService) {}

  @Post()
  create(@Body() createOdaLocationsStatusDto: CreateOdaLocationsStatusDto) {
    return this.odaLocationsStatusService.create(createOdaLocationsStatusDto);
  }

  @Get()
  findAll() {
    return this.odaLocationsStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaLocationsStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaLocationsStatusDto: UpdateOdaLocationsStatusDto) {
    return this.odaLocationsStatusService.update(+id, updateOdaLocationsStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaLocationsStatusService.remove(+id);
  }
}
