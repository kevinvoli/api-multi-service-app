import { Module } from '@nestjs/common';
import { StoreFavorites } from './entities/store-favorite.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreFavoritesService } from './store-favorites.service';
import { StoreFavoritesController } from './store-favorites.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoreFavorites])],
  controllers: [StoreFavoritesController],
  providers: [StoreFavoritesService],
  exports: [TypeOrmModule.forFeature([StoreFavorites])],
})
export class StoreFavoritesModule {}
