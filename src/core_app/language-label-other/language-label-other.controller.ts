import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLabelOtherService } from './language-label-other.service';
import { CreateLanguageLabelOtherDto } from './dto/create-language-label-other.dto';
import { UpdateLanguageLabelOtherDto } from './dto/update-language-label-other.dto';

@Controller('language-label-other')
export class LanguageLabelOtherController {
  constructor(private readonly languageLabelOtherService: LanguageLabelOtherService) {}

  @Post()
  create(@Body() createLanguageLabelOtherDto: CreateLanguageLabelOtherDto) {
    return this.languageLabelOtherService.create(createLanguageLabelOtherDto);
  }

  @Get()
  findAll() {
    return this.languageLabelOtherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLabelOtherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLabelOtherDto: UpdateLanguageLabelOtherDto) {
    return this.languageLabelOtherService.update(+id, updateLanguageLabelOtherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLabelOtherService.remove(+id);
  }
}
