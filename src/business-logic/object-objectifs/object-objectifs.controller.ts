import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectObjectifsService } from './object-objectifs.service';
import { CreateObjectObjectifDto } from './dto/create-object-objectif.dto';
import { UpdateObjectObjectifDto } from './dto/update-object-objectif.dto';

@Controller('object-objectifs')
export class ObjectObjectifsController {
  constructor(private readonly objectObjectifsService: ObjectObjectifsService) {}

  @Post()
  create(@Body() createObjectObjectifDto: CreateObjectObjectifDto) {
    return this.objectObjectifsService.create(createObjectObjectifDto);
  }

  @Get()
  findAll() {
    return this.objectObjectifsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectObjectifsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectObjectifDto: UpdateObjectObjectifDto) {
    return this.objectObjectifsService.update(+id, updateObjectObjectifDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectObjectifsService.remove(+id);
  }
}
