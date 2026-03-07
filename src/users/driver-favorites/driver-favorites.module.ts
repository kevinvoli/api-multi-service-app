import { Module } from '@nestjs/common';
import { DriverFavorites } from './entities/driver-favorite.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverFavoritesService } from './driver-favorites.service';
import { DriverFavoritesController } from './driver-favorites.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverFavorites])],
  controllers: [DriverFavoritesController],
  providers: [DriverFavoritesService],
  exports: [TypeOrmModule.forFeature([DriverFavorites])],
})
export class DriverFavoritesModule {}
