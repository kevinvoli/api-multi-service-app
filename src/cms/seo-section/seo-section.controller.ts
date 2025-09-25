import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeoSectionService } from './seo-section.service';
import { CreateSeoSectionDto } from './dto/create-seo-section.dto';
import { UpdateSeoSectionDto } from './dto/update-seo-section.dto';

@Controller('seo-section')
export class SeoSectionController {
  constructor(private readonly seoSectionService: SeoSectionService) {}

  @Post()
  create(@Body() createSeoSectionDto: CreateSeoSectionDto) {
    return this.seoSectionService.create(createSeoSectionDto);
  }

  @Get()
  findAll() {
    return this.seoSectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seoSectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeoSectionDto: UpdateSeoSectionDto) {
    return this.seoSectionService.update(+id, updateSeoSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seoSectionService.remove(+id);
  }
}
