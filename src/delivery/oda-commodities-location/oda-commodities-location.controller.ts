import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaCommoditiesLocationService } from './oda-commodities-location.service';
import { CreateOdaCommoditiesLocationDto } from './dto/create-oda-commodities-location.dto';
import { UpdateOdaCommoditiesLocationDto } from './dto/update-oda-commodities-location.dto';

@Controller('oda-commodities-location')
export class OdaCommoditiesLocationController {
  constructor(private readonly odaCommoditiesLocationService: OdaCommoditiesLocationService) {}

  @Post()
  create(@Body() createOdaCommoditiesLocationDto: CreateOdaCommoditiesLocationDto) {
    return this.odaCommoditiesLocationService.create(createOdaCommoditiesLocationDto);
  }

  @Get()
  findAll() {
    return this.odaCommoditiesLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaCommoditiesLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaCommoditiesLocationDto: UpdateOdaCommoditiesLocationDto) {
    return this.odaCommoditiesLocationService.update(+id, updateOdaCommoditiesLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaCommoditiesLocationService.remove(+id);
  }
}
