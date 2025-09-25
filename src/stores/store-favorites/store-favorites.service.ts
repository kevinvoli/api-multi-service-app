import { Injectable } from '@nestjs/common';
import { CreateStoreFavoriteDto } from './dto/create-store-favorite.dto';
import { UpdateStoreFavoriteDto } from './dto/update-store-favorite.dto';

@Injectable()
export class StoreFavoritesService {
  create(createStoreFavoriteDto: CreateStoreFavoriteDto) {
    return 'This action adds a new storeFavorite';
  }

  findAll() {
    return `This action returns all storeFavorites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeFavorite`;
  }

  update(id: number, updateStoreFavoriteDto: UpdateStoreFavoriteDto) {
    return `This action updates a #${id} storeFavorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeFavorite`;
  }
}
