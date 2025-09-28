import { Module } from '@nestjs/common';
import { FoodMenuImagesService } from './food-menu-images.service';
import { FoodMenuImagesController } from './food-menu-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenuImages } from './entities/food-menu-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodMenuImages])],
  controllers: [FoodMenuImagesController],
  providers: [FoodMenuImagesService],
})
export class FoodMenuImagesModule {}
