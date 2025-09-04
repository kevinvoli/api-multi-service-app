import { Injectable } from '@nestjs/common';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';

@Injectable()
export class FaqCategoriesService {
  create(createFaqCategoryDto: CreateFaqCategoryDto) {
    return 'This action adds a new faqCategory';
  }

  findAll() {
    return `This action returns all faqCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faqCategory`;
  }

  update(id: number, updateFaqCategoryDto: UpdateFaqCategoryDto) {
    return `This action updates a #${id} faqCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} faqCategory`;
  }
}
