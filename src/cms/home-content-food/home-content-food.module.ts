import { Module } from '@nestjs/common';
import { HomeContentFoodService } from './home-content-food.service';
import { HomeContentFoodController } from './home-content-food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeContent } from '../home-content/entities/home-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeContent])],
  controllers: [HomeContentFoodController],
  providers: [HomeContentFoodService],
})
export class HomeContentFoodModule {}
