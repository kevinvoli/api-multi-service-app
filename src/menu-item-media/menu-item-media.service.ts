import { Injectable } from '@nestjs/common';
import { CreateMenuItemMediaDto } from './dto/create-menu-item-media.dto';
import { UpdateMenuItemMediaDto } from './dto/update-menu-item-media.dto';

@Injectable()
export class MenuItemMediaService {
  create(createMenuItemMediaDto: CreateMenuItemMediaDto) {
    return 'This action adds a new menuItemMedia';
  }

  findAll() {
    return `This action returns all menuItemMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItemMedia`;
  }

  update(id: number, updateMenuItemMediaDto: UpdateMenuItemMediaDto) {
    return `This action updates a #${id} menuItemMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItemMedia`;
  }
}
