import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreFavoritesService } from './store-favorites.service';
import { CreateStoreFavoriteDto } from './dto/create-store-favorite.dto';
import { UpdateStoreFavoriteDto } from './dto/update-store-favorite.dto';

@Controller('store-favorites')
export class StoreFavoritesController {
  constructor(private readonly storeFavoritesService: StoreFavoritesService) {}

  @Post()
  create(@Body() createStoreFavoriteDto: CreateStoreFavoriteDto) {
    return this.storeFavoritesService.create(createStoreFavoriteDto);
  }

  @Get()
  findAll() {
    return this.storeFavoritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeFavoritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreFavoriteDto: UpdateStoreFavoriteDto) {
    return this.storeFavoritesService.update(+id, updateStoreFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeFavoritesService.remove(+id);
  }
}
