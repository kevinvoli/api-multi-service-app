import { Module } from '@nestjs/common';
import { FoodMenu } from './entities/food-menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenuService } from './food-menu.service';
import { FoodMenuController } from './food-menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FoodMenu])],
  controllers: [FoodMenuController],
  providers: [FoodMenuService],
  exports: [TypeOrmModule.forFeature([FoodMenu])],
})
export class FoodMenuModule {}
