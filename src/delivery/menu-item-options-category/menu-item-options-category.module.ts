import { Module } from '@nestjs/common';
import { MenuItemOptionsCategoryService } from './menu-item-options-category.service';
import { MenuItemOptionsCategoryController } from './menu-item-options-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuitemOptionsCategory } from './entities/menu-item-options-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuitemOptionsCategory])],
  controllers: [MenuItemOptionsCategoryController],
  providers: [MenuItemOptionsCategoryService],
})
export class MenuItemOptionsCategoryModule {}
