import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuItemMediaService } from './menu-item-media.service';
import { CreateMenuItemMediaDto } from './dto/create-menu-item-media.dto';
import { UpdateMenuItemMediaDto } from './dto/update-menu-item-media.dto';

@Controller('menu-item-media')
export class MenuItemMediaController {
  constructor(private readonly menuItemMediaService: MenuItemMediaService) {}

  @Post()
  create(@Body() createMenuItemMediaDto: CreateMenuItemMediaDto) {
    return this.menuItemMediaService.create(createMenuItemMediaDto);
  }

  @Get()
  findAll() {
    return this.menuItemMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuItemMediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuItemMediaDto: UpdateMenuItemMediaDto) {
    return this.menuItemMediaService.update(+id, updateMenuItemMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuItemMediaService.remove(+id);
  }
}
