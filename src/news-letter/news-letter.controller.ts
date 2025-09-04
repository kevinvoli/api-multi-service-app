import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsLetterService } from './news-letter.service';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';

@Controller('news-letter')
export class NewsLetterController {
  constructor(private readonly newsLetterService: NewsLetterService) {}

  @Post()
  create(@Body() createNewsLetterDto: CreateNewsLetterDto) {
    return this.newsLetterService.create(createNewsLetterDto);
  }

  @Get()
  findAll() {
    return this.newsLetterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsLetterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsLetterDto: UpdateNewsLetterDto) {
    return this.newsLetterService.update(+id, updateNewsLetterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsLetterService.remove(+id);
  }
}
