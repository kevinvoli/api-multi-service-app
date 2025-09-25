import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLabel5Service } from './language-label_5.service';
import { CreateLanguageLabel5Dto } from './dto/create-language-label_5.dto';
import { UpdateLanguageLabel5Dto } from './dto/update-language-label_5.dto';

@Controller('language-label-5')
export class LanguageLabel5Controller {
  constructor(private readonly languageLabel5Service: LanguageLabel5Service) {}

  @Post()
  create(@Body() createLanguageLabel5Dto: CreateLanguageLabel5Dto) {
    return this.languageLabel5Service.create(createLanguageLabel5Dto);
  }

  @Get()
  findAll() {
    return this.languageLabel5Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLabel5Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLabel5Dto: UpdateLanguageLabel5Dto) {
    return this.languageLabel5Service.update(+id, updateLanguageLabel5Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLabel5Service.remove(+id);
  }
}
