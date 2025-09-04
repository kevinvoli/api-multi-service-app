import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLabel2Service } from './language-label_2.service';
import { CreateLanguageLabel2Dto } from './dto/create-language-label_2.dto';
import { UpdateLanguageLabel2Dto } from './dto/update-language-label_2.dto';

@Controller('language-label-2')
export class LanguageLabel2Controller {
  constructor(private readonly languageLabel2Service: LanguageLabel2Service) {}

  @Post()
  create(@Body() createLanguageLabel2Dto: CreateLanguageLabel2Dto) {
    return this.languageLabel2Service.create(createLanguageLabel2Dto);
  }

  @Get()
  findAll() {
    return this.languageLabel2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLabel2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLabel2Dto: UpdateLanguageLabel2Dto) {
    return this.languageLabel2Service.update(+id, updateLanguageLabel2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLabel2Service.remove(+id);
  }
}
