import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreCategoryTagsService } from './store-category-tags.service';
import { CreateStoreCategoryTagDto } from './dto/create-store-category-tag.dto';
import { UpdateStoreCategoryTagDto } from './dto/update-store-category-tag.dto';

@Controller('store-category-tags')
export class StoreCategoryTagsController {
  constructor(private readonly storeCategoryTagsService: StoreCategoryTagsService) {}

  @Post()
  create(@Body() createStoreCategoryTagDto: CreateStoreCategoryTagDto) {
    return this.storeCategoryTagsService.create(createStoreCategoryTagDto);
  }

  @Get()
  findAll() {
    return this.storeCategoryTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeCategoryTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreCategoryTagDto: UpdateStoreCategoryTagDto) {
    return this.storeCategoryTagsService.update(+id, updateStoreCategoryTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeCategoryTagsService.remove(+id);
  }
}
