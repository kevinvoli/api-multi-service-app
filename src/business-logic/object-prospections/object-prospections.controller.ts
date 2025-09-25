import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectProspectionsService } from './object-prospections.service';
import { CreateObjectProspectionDto } from './dto/create-object-prospection.dto';
import { UpdateObjectProspectionDto } from './dto/update-object-prospection.dto';

@Controller('object-prospections')
export class ObjectProspectionsController {
  constructor(private readonly objectProspectionsService: ObjectProspectionsService) {}

  @Post()
  create(@Body() createObjectProspectionDto: CreateObjectProspectionDto) {
    return this.objectProspectionsService.create(createObjectProspectionDto);
  }

  @Get()
  findAll() {
    return this.objectProspectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectProspectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectProspectionDto: UpdateObjectProspectionDto) {
    return this.objectProspectionsService.update(+id, updateObjectProspectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectProspectionsService.remove(+id);
  }
}
