import { Module } from '@nestjs/common';
import { HomeContentFoodService } from './home-content-food.service';
import { HomeContentFoodController } from './home-content-food.controller';

@Module({
  controllers: [HomeContentFoodController],
  providers: [HomeContentFoodService],
})
export class HomeContentFoodModule {}
