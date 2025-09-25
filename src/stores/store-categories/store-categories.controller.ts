import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreCategoriesService } from './store-categories.service';
import { CreateStoreCategoryDto } from './dto/create-store-category.dto';
import { UpdateStoreCategoryDto } from './dto/update-store-category.dto';

@Controller('store-categories')
export class StoreCategoriesController {
  constructor(private readonly storeCategoriesService: StoreCategoriesService) {}

  @Post()
  create(@Body() createStoreCategoryDto: CreateStoreCategoryDto) {
    return this.storeCategoriesService.create(createStoreCategoryDto);
  }

  @Get()
  findAll() {
    return this.storeCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreCategoryDto: UpdateStoreCategoryDto) {
    return this.storeCategoriesService.update(+id, updateStoreCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeCategoriesService.remove(+id);
  }
}
