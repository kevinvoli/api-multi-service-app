import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqCategoriesService } from './faq-categories.service';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';

@Controller('faq-categories')
export class FaqCategoriesController {
  constructor(private readonly faqCategoriesService: FaqCategoriesService) {}

  @Post()
  async create(@Body() createFaqCategoryDto: CreateFaqCategoryDto) {
    return await this.faqCategoriesService.create(createFaqCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.faqCategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.faqCategoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFaqCategoryDto: UpdateFaqCategoryDto) {
    return await this.faqCategoriesService.update(+id, updateFaqCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.faqCategoriesService.remove(+id);
  }
}