import { Injectable } from '@nestjs/common';
import { CreateMenuItemOptionsCategoryDto } from './dto/create-menu-item-options-category.dto';
import { UpdateMenuItemOptionsCategoryDto } from './dto/update-menu-item-options-category.dto';

@Injectable()
export class MenuItemOptionsCategoryService {
  create(createMenuItemOptionsCategoryDto: CreateMenuItemOptionsCategoryDto) {
    return 'This action adds a new menuItemOptionsCategory';
  }

  findAll() {
    return `This action returns all menuItemOptionsCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItemOptionsCategory`;
  }

  update(id: number, updateMenuItemOptionsCategoryDto: UpdateMenuItemOptionsCategoryDto) {
    return `This action updates a #${id} menuItemOptionsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItemOptionsCategory`;
  }
}
