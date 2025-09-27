import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpDetailCategoriesService } from './help-detail-categories.service';
import { CreateHelpDetailCategoryDto } from './dto/create-help-detail-category.dto';
import { UpdateHelpDetailCategoryDto } from './dto/update-help-detail-category.dto';

@Controller('help-detail-categories')
export class HelpDetailCategoriesController {
  constructor(private readonly helpDetailCategoriesService: HelpDetailCategoriesService) {}

  @Post()
  async create(@Body() createHelpDetailCategoryDto: CreateHelpDetailCategoryDto) {
    return await this.helpDetailCategoriesService.create(createHelpDetailCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.helpDetailCategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.helpDetailCategoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHelpDetailCategoryDto: UpdateHelpDetailCategoryDto) {
    return await this.helpDetailCategoriesService.update(+id, updateHelpDetailCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.helpDetailCategoriesService.remove(+id);
  }
}