import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteStoreService } from './favorite-store.service';
import { CreateFavoriteStoreDto } from './dto/create-favorite-store.dto';
import { UpdateFavoriteStoreDto } from './dto/update-favorite-store.dto';

@Controller('favorite-store')
export class FavoriteStoreController {
  constructor(private readonly favoriteStoreService: FavoriteStoreService) {}

  @Post()
  create(@Body() createFavoriteStoreDto: CreateFavoriteStoreDto) {
    return this.favoriteStoreService.create(createFavoriteStoreDto);
  }

  @Get()
  findAll() {
    return this.favoriteStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteStoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteStoreDto: UpdateFavoriteStoreDto) {
    return this.favoriteStoreService.update(+id, updateFavoriteStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteStoreService.remove(+id);
  }
}
