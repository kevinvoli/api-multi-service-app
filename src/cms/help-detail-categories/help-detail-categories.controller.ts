import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpDetailCategoriesService } from './help-detail-categories.service';
import { CreateHelpDetailCategoryDto } from './dto/create-help-detail-category.dto';
import { UpdateHelpDetailCategoryDto } from './dto/update-help-detail-category.dto';

@Controller('help-detail-categories')
export class HelpDetailCategoriesController {
  constructor(private readonly helpDetailCategoriesService: HelpDetailCategoriesService) {}

  @Post()
  create(@Body() createHelpDetailCategoryDto: CreateHelpDetailCategoryDto) {
    return this.helpDetailCategoriesService.create(createHelpDetailCategoryDto);
  }

  @Get()
  findAll() {
    return this.helpDetailCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpDetailCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelpDetailCategoryDto: UpdateHelpDetailCategoryDto) {
    return this.helpDetailCategoriesService.update(+id, updateHelpDetailCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpDetailCategoriesService.remove(+id);
  }
}
