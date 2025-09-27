import { Module } from '@nestjs/common';
import { DriverFavoritesService } from './driver-favorites.service';
import { DriverFavoritesController } from './driver-favorites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverFavorites } from './entities/driver-favorite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverFavorites])],
  controllers: [DriverFavoritesController],
  providers: [DriverFavoritesService],
})
export class DriverFavoritesModule {}
