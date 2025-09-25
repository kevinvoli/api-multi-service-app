import { Injectable } from '@nestjs/common';
import { CreateHelpsCategoryDto } from './dto/create-helps-category.dto';
import { UpdateHelpsCategoryDto } from './dto/update-helps-category.dto';

@Injectable()
export class HelpsCategoriesService {
  create(createHelpsCategoryDto: CreateHelpsCategoryDto) {
    return 'This action adds a new helpsCategory';
  }

  findAll() {
    return `This action returns all helpsCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpsCategory`;
  }

  update(id: number, updateHelpsCategoryDto: UpdateHelpsCategoryDto) {
    return `This action updates a #${id} helpsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpsCategory`;
  }
}
