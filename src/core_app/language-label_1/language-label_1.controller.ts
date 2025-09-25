import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLabel1Service } from './language-label_1.service';
import { CreateLanguageLabel1Dto } from './dto/create-language-label_1.dto';
import { UpdateLanguageLabel1Dto } from './dto/update-language-label_1.dto';

@Controller('language-label-1')
export class LanguageLabel1Controller {
  constructor(private readonly languageLabel1Service: LanguageLabel1Service) {}

  @Post()
  create(@Body() createLanguageLabel1Dto: CreateLanguageLabel1Dto) {
    return this.languageLabel1Service.create(createLanguageLabel1Dto);
  }

  @Get()
  findAll() {
    return this.languageLabel1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLabel1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLabel1Dto: UpdateLanguageLabel1Dto) {
    return this.languageLabel1Service.update(+id, updateLanguageLabel1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLabel1Service.remove(+id);
  }
}
