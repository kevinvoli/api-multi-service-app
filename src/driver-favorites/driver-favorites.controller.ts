import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverFavoritesService } from './driver-favorites.service';
import { CreateDriverFavoriteDto } from './dto/create-driver-favorite.dto';
import { UpdateDriverFavoriteDto } from './dto/update-driver-favorite.dto';

@Controller('driver-favorites')
export class DriverFavoritesController {
  constructor(private readonly driverFavoritesService: DriverFavoritesService) {}

  @Post()
  create(@Body() createDriverFavoriteDto: CreateDriverFavoriteDto) {
    return this.driverFavoritesService.create(createDriverFavoriteDto);
  }

  @Get()
  findAll() {
    return this.driverFavoritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverFavoritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverFavoriteDto: UpdateDriverFavoriteDto) {
    return this.driverFavoritesService.update(+id, updateDriverFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverFavoritesService.remove(+id);
  }
}
