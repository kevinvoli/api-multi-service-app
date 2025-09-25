import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpsCategoriesService } from './helps-categories.service';
import { CreateHelpsCategoryDto } from './dto/create-helps-category.dto';
import { UpdateHelpsCategoryDto } from './dto/update-helps-category.dto';

@Controller('helps-categories')
export class HelpsCategoriesController {
  constructor(private readonly helpsCategoriesService: HelpsCategoriesService) {}

  @Post()
  create(@Body() createHelpsCategoryDto: CreateHelpsCategoryDto) {
    return this.helpsCategoriesService.create(createHelpsCategoryDto);
  }

  @Get()
  findAll() {
    return this.helpsCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpsCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelpsCategoryDto: UpdateHelpsCategoryDto) {
    return this.helpsCategoriesService.update(+id, updateHelpsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpsCategoriesService.remove(+id);
  }
}
