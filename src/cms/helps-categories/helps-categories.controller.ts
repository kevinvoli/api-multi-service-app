import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpsCategoriesService } from './helps-categories.service';
import { CreateHelpsCategoryDto } from './dto/create-helps-category.dto';
import { UpdateHelpsCategoryDto } from './dto/update-helps-category.dto';

@Controller('helps-categories')
export class HelpsCategoriesController {
  constructor(private readonly helpsCategoriesService: HelpsCategoriesService) {}

  @Post()
  async create(@Body() createHelpsCategoryDto: CreateHelpsCategoryDto) {
    return await this.helpsCategoriesService.create(createHelpsCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.helpsCategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.helpsCategoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHelpsCategoryDto: UpdateHelpsCategoryDto) {
    return await this.helpsCategoriesService.update(+id, updateHelpsCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.helpsCategoriesService.remove(+id);
  }
}