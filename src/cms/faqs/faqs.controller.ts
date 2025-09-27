import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

@Controller('faqs')
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  @Post()
  async create(@Body() createFaqDto: CreateFaqDto) {
    return await this.faqsService.create(createFaqDto);
  }

  @Get()
  async findAll() {
    return await this.faqsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.faqsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return await this.faqsService.update(+id, updateFaqDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.faqsService.remove(+id);
  }
}