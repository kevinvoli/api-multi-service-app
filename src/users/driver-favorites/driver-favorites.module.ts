import { Module } from '@nestjs/common';
import { DriverFavoritesService } from './driver-favorites.service';
import { DriverFavoritesController } from './driver-favorites.controller';

@Module({
  controllers: [DriverFavoritesController],
  providers: [DriverFavoritesService],
})
export class DriverFavoritesModule {}
