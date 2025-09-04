import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageMasterService } from './language-master.service';
import { CreateLanguageMasterDto } from './dto/create-language-master.dto';
import { UpdateLanguageMasterDto } from './dto/update-language-master.dto';

@Controller('language-master')
export class LanguageMasterController {
  constructor(private readonly languageMasterService: LanguageMasterService) {}

  @Post()
  create(@Body() createLanguageMasterDto: CreateLanguageMasterDto) {
    return this.languageMasterService.create(createLanguageMasterDto);
  }

  @Get()
  findAll() {
    return this.languageMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageMasterDto: UpdateLanguageMasterDto) {
    return this.languageMasterService.update(+id, updateLanguageMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageMasterService.remove(+id);
  }
}
