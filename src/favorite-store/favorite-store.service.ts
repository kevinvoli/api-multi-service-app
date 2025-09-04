import { Injectable } from '@nestjs/common';
import { CreateFavoriteStoreDto } from './dto/create-favorite-store.dto';
import { UpdateFavoriteStoreDto } from './dto/update-favorite-store.dto';

@Injectable()
export class FavoriteStoreService {
  create(createFavoriteStoreDto: CreateFavoriteStoreDto) {
    return 'This action adds a new favoriteStore';
  }

  findAll() {
    return `This action returns all favoriteStore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoriteStore`;
  }

  update(id: number, updateFavoriteStoreDto: UpdateFavoriteStoreDto) {
    return `This action updates a #${id} favoriteStore`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoriteStore`;
  }
}
