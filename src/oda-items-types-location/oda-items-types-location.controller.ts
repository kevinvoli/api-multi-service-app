import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaItemsTypesLocationService } from './oda-items-types-location.service';
import { CreateOdaItemsTypesLocationDto } from './dto/create-oda-items-types-location.dto';
import { UpdateOdaItemsTypesLocationDto } from './dto/update-oda-items-types-location.dto';

@Controller('oda-items-types-location')
export class OdaItemsTypesLocationController {
  constructor(private readonly odaItemsTypesLocationService: OdaItemsTypesLocationService) {}

  @Post()
  create(@Body() createOdaItemsTypesLocationDto: CreateOdaItemsTypesLocationDto) {
    return this.odaItemsTypesLocationService.create(createOdaItemsTypesLocationDto);
  }

  @Get()
  findAll() {
    return this.odaItemsTypesLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaItemsTypesLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaItemsTypesLocationDto: UpdateOdaItemsTypesLocationDto) {
    return this.odaItemsTypesLocationService.update(+id, updateOdaItemsTypesLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaItemsTypesLocationService.remove(+id);
  }
}
