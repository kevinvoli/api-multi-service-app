import { Injectable } from '@nestjs/common';
import { CreateHelpDetailCategoryDto } from './dto/create-help-detail-category.dto';
import { UpdateHelpDetailCategoryDto } from './dto/update-help-detail-category.dto';

@Injectable()
export class HelpDetailCategoriesService {
  create(createHelpDetailCategoryDto: CreateHelpDetailCategoryDto) {
    return 'This action adds a new helpDetailCategory';
  }

  findAll() {
    return `This action returns all helpDetailCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpDetailCategory`;
  }

  update(id: number, updateHelpDetailCategoryDto: UpdateHelpDetailCategoryDto) {
    return `This action updates a #${id} helpDetailCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpDetailCategory`;
  }
}
