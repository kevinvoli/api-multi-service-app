import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuItemOptionsCategoryService } from './menu-item-options-category.service';
import { CreateMenuItemOptionsCategoryDto } from './dto/create-menu-item-options-category.dto';
import { UpdateMenuItemOptionsCategoryDto } from './dto/update-menu-item-options-category.dto';

@Controller('menu-item-options-category')
export class MenuItemOptionsCategoryController {
  constructor(private readonly menuItemOptionsCategoryService: MenuItemOptionsCategoryService) {}

  @Post()
  create(@Body() createMenuItemOptionsCategoryDto: CreateMenuItemOptionsCategoryDto) {
    return this.menuItemOptionsCategoryService.create(createMenuItemOptionsCategoryDto);
  }

  @Get()
  findAll() {
    return this.menuItemOptionsCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuItemOptionsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuItemOptionsCategoryDto: UpdateMenuItemOptionsCategoryDto) {
    return this.menuItemOptionsCategoryService.update(+id, updateMenuItemOptionsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuItemOptionsCategoryService.remove(+id);
  }
}
