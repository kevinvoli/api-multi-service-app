import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectRealisationService } from './object-realisation.service';
import { CreateObjectRealisationDto } from './dto/create-object-realisation.dto';
import { UpdateObjectRealisationDto } from './dto/update-object-realisation.dto';

@Controller('object-realisation')
export class ObjectRealisationController {
  constructor(private readonly objectRealisationService: ObjectRealisationService) {}

  @Post()
  create(@Body() createObjectRealisationDto: CreateObjectRealisationDto) {
    return this.objectRealisationService.create(createObjectRealisationDto);
  }

  @Get()
  findAll() {
    return this.objectRealisationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectRealisationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectRealisationDto: UpdateObjectRealisationDto) {
    return this.objectRealisationService.update(+id, updateObjectRealisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectRealisationService.remove(+id);
  }
}
