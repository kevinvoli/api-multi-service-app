import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaSousItemsTypesLocationService } from './oda-sous-items-types-location.service';
import { CreateOdaSousItemsTypesLocationDto } from './dto/create-oda-sous-items-types-location.dto';
import { UpdateOdaSousItemsTypesLocationDto } from './dto/update-oda-sous-items-types-location.dto';

@Controller('oda-sous-items-types-location')
export class OdaSousItemsTypesLocationController {
  constructor(private readonly odaSousItemsTypesLocationService: OdaSousItemsTypesLocationService) {}

  @Post()
  create(@Body() createOdaSousItemsTypesLocationDto: CreateOdaSousItemsTypesLocationDto) {
    return this.odaSousItemsTypesLocationService.create(createOdaSousItemsTypesLocationDto);
  }

  @Get()
  findAll() {
    return this.odaSousItemsTypesLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaSousItemsTypesLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaSousItemsTypesLocationDto: UpdateOdaSousItemsTypesLocationDto) {
    return this.odaSousItemsTypesLocationService.update(+id, updateOdaSousItemsTypesLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaSousItemsTypesLocationService.remove(+id);
  }
}
