import { Injectable } from '@nestjs/common';
import { CreateDriverFavoriteDto } from './dto/create-driver-favorite.dto';
import { UpdateDriverFavoriteDto } from './dto/update-driver-favorite.dto';

@Injectable()
export class DriverFavoritesService {
  create(createDriverFavoriteDto: CreateDriverFavoriteDto) {
    return 'This action adds a new driverFavorite';
  }

  findAll() {
    return `This action returns all driverFavorites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverFavorite`;
  }

  update(id: number, updateDriverFavoriteDto: UpdateDriverFavoriteDto) {
    return `This action updates a #${id} driverFavorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverFavorite`;
  }
}
