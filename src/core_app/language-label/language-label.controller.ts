import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageLabelService } from './language-label.service';
import { CreateLanguageLabelDto } from './dto/create-language-label.dto';
import { UpdateLanguageLabelDto } from './dto/update-language-label.dto';

@Controller('language-label')
export class LanguageLabelController {
  constructor(private readonly languageLabelService: LanguageLabelService) {}

  @Post()
  create(@Body() createLanguageLabelDto: CreateLanguageLabelDto) {
    return this.languageLabelService.create(createLanguageLabelDto);
  }

  @Get()
  findAll() {
    return this.languageLabelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageLabelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageLabelDto: UpdateLanguageLabelDto) {
    return this.languageLabelService.update(+id, updateLanguageLabelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageLabelService.remove(+id);
  }
}
