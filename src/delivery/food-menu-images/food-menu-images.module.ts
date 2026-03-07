import { Module } from '@nestjs/common';
import { FoodMenuImages } from './entities/food-menu-image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenuImagesService } from './food-menu-images.service';
import { FoodMenuImagesController } from './food-menu-images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FoodMenuImages])],
  controllers: [FoodMenuImagesController],
  providers: [FoodMenuImagesService],
  exports: [TypeOrmModule.forFeature([FoodMenuImages])],
})
export class FoodMenuImagesModule {}
