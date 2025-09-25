import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectCategoriesService } from './object-categories.service';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';

@Controller('object-categories')
export class ObjectCategoriesController {
  constructor(private readonly objectCategoriesService: ObjectCategoriesService) {}

  @Post()
  create(@Body() createObjectCategoryDto: CreateObjectCategoryDto) {
    return this.objectCategoriesService.create(createObjectCategoryDto);
  }

  @Get()
  findAll() {
    return this.objectCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectCategoryDto: UpdateObjectCategoryDto) {
    return this.objectCategoriesService.update(+id, updateObjectCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectCategoriesService.remove(+id);
  }
}
