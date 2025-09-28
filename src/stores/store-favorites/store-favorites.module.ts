import { Module } from '@nestjs/common';
import { StoreFavoritesService } from './store-favorites.service';
import { StoreFavoritesController } from './store-favorites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreFavorites } from './entities/store-favorite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreFavorites])],
  controllers: [StoreFavoritesController],
  providers: [StoreFavoritesService],
})
export class StoreFavoritesModule {}
