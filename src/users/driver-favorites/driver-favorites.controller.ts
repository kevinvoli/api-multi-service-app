import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverFavoritesService } from './driver-favorites.service';
import { CreateDriverFavoriteDto } from './dto/create-driver-favorite.dto';
import { UpdateDriverFavoriteDto } from './dto/update-driver-favorite.dto';

@Controller('driver-favorites')
export class DriverFavoritesController {
  constructor(private readonly driverFavoritesService: DriverFavoritesService) {}

  @Post()
  async create(@Body() createDriverFavoriteDto: CreateDriverFavoriteDto) {
    return await this.driverFavoritesService.create(createDriverFavoriteDto);
  }

  @Get()
  async findAll() {
    return await this.driverFavoritesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.driverFavoritesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDriverFavoriteDto: UpdateDriverFavoriteDto) {
    return await this.driverFavoritesService.update(+id, updateDriverFavoriteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.driverFavoritesService.remove(+id);
  }
}
