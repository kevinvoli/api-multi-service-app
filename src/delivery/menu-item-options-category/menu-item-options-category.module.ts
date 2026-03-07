import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemOptionsCategoryService } from './menu-item-options-category.service';
import { MenuItemOptionsCategoryController } from './menu-item-options-category.controller';

import { MenuitemOptionsCategory } from './entities/menu-item-options-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuitemOptionsCategory])],
  controllers: [MenuItemOptionsCategoryController],
  providers: [MenuItemOptionsCategoryService],
  exports: [TypeOrmModule.forFeature([MenuitemOptionsCategory])],
})
export class MenuItemOptionsCategoryModule {}
