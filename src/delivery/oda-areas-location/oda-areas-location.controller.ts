import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaAreasLocationService } from './oda-areas-location.service';
import { CreateOdaAreasLocationDto } from './dto/create-oda-areas-location.dto';
import { UpdateOdaAreasLocationDto } from './dto/update-oda-areas-location.dto';

@Controller('oda-areas-location')
export class OdaAreasLocationController {
  constructor(private readonly odaAreasLocationService: OdaAreasLocationService) {}

  @Post()
  create(@Body() createOdaAreasLocationDto: CreateOdaAreasLocationDto) {
    return this.odaAreasLocationService.create(createOdaAreasLocationDto);
  }

  @Get()
  findAll() {
    return this.odaAreasLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaAreasLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaAreasLocationDto: UpdateOdaAreasLocationDto) {
    return this.odaAreasLocationService.update(+id, updateOdaAreasLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaAreasLocationService.remove(+id);
  }
}
