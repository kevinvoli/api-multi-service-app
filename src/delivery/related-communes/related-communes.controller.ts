import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelatedCommunesService } from './related-communes.service';
import { CreateRelatedCommuneDto } from './dto/create-related-commune.dto';
import { UpdateRelatedCommuneDto } from './dto/update-related-commune.dto';

@Controller('related-communes')
export class RelatedCommunesController {
  constructor(private readonly relatedCommunesService: RelatedCommunesService) {}

  @Post()
  create(@Body() createRelatedCommuneDto: CreateRelatedCommuneDto) {
    return this.relatedCommunesService.create(createRelatedCommuneDto);
  }

  @Get()
  findAll() {
    return this.relatedCommunesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relatedCommunesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelatedCommuneDto: UpdateRelatedCommuneDto) {
    return this.relatedCommunesService.update(+id, updateRelatedCommuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relatedCommunesService.remove(+id);
  }
}
