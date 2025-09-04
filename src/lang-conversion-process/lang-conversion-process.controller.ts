import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LangConversionProcessService } from './lang-conversion-process.service';
import { CreateLangConversionProcessDto } from './dto/create-lang-conversion-process.dto';
import { UpdateLangConversionProcessDto } from './dto/update-lang-conversion-process.dto';

@Controller('lang-conversion-process')
export class LangConversionProcessController {
  constructor(private readonly langConversionProcessService: LangConversionProcessService) {}

  @Post()
  create(@Body() createLangConversionProcessDto: CreateLangConversionProcessDto) {
    return this.langConversionProcessService.create(createLangConversionProcessDto);
  }

  @Get()
  findAll() {
    return this.langConversionProcessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langConversionProcessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangConversionProcessDto: UpdateLangConversionProcessDto) {
    return this.langConversionProcessService.update(+id, updateLangConversionProcessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langConversionProcessService.remove(+id);
  }
}
