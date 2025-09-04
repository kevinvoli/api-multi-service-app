import { Module } from '@nestjs/common';
import { FoodMenuImagesService } from './food-menu-images.service';
import { FoodMenuImagesController } from './food-menu-images.controller';

@Module({
  controllers: [FoodMenuImagesController],
  providers: [FoodMenuImagesService],
})
export class FoodMenuImagesModule {}
