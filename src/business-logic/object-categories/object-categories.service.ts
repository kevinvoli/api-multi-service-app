import { Injectable } from '@nestjs/common';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';

@Injectable()
export class ObjectCategoriesService {
  create(createObjectCategoryDto: CreateObjectCategoryDto) {
    return 'This action adds a new objectCategory';
  }

  findAll() {
    return `This action returns all objectCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectCategory`;
  }

  update(id: number, updateObjectCategoryDto: UpdateObjectCategoryDto) {
    return `This action updates a #${id} objectCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectCategory`;
  }
}
