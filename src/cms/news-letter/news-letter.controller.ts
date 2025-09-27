import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsLetterService } from './news-letter.service';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';

@Controller('news-letter')
export class NewsLetterController {
  constructor(private readonly newsLetterService: NewsLetterService) {}

  @Post()
  async create(@Body() createNewsLetterDto: CreateNewsLetterDto) {
    return await this.newsLetterService.create(createNewsLetterDto);
  }

  @Get()
  async findAll() {
    return await this.newsLetterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.newsLetterService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNewsLetterDto: UpdateNewsLetterDto) {
    return await this.newsLetterService.update(+id, updateNewsLetterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.newsLetterService.remove(+id);
  }
}