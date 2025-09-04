import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguagePageDetailsService } from './language-page-details.service';
import { CreateLanguagePageDetailDto } from './dto/create-language-page-detail.dto';
import { UpdateLanguagePageDetailDto } from './dto/update-language-page-detail.dto';

@Controller('language-page-details')
export class LanguagePageDetailsController {
  constructor(private readonly languagePageDetailsService: LanguagePageDetailsService) {}

  @Post()
  create(@Body() createLanguagePageDetailDto: CreateLanguagePageDetailDto) {
    return this.languagePageDetailsService.create(createLanguagePageDetailDto);
  }

  @Get()
  findAll() {
    return this.languagePageDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languagePageDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguagePageDetailDto: UpdateLanguagePageDetailDto) {
    return this.languagePageDetailsService.update(+id, updateLanguagePageDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagePageDetailsService.remove(+id);
  }
}
