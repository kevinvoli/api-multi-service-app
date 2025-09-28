import { Module } from '@nestjs/common';
import { FoodMenuService } from './food-menu.service';
import { FoodMenuController } from './food-menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenu } from './entities/food-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodMenu])],
  controllers: [FoodMenuController],
  providers: [FoodMenuService],
})
export class FoodMenuModule {}
