import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeContentFoodService } from './home-content-food.service';
import { HomeContentFoodController } from './home-content-food.controller';

import { Homecontentfood } from './entities/home-content-food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Homecontentfood])],
  controllers: [HomeContentFoodController],
  providers: [HomeContentFoodService],
  exports: [TypeOrmModule.forFeature([Homecontentfood])],
})
export class HomeContentFoodModule {}
