import { Module } from '@nestjs/common';
import { MenuItemOptionsCategoryService } from './menu-item-options-category.service';
import { MenuItemOptionsCategoryController } from './menu-item-options-category.controller';

@Module({
  controllers: [MenuItemOptionsCategoryController],
  providers: [MenuItemOptionsCategoryService],
})
export class MenuItemOptionsCategoryModule {}
