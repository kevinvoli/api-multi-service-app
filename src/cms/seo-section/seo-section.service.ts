import { Injectable } from '@nestjs/common';
import { CreateSeoSectionDto } from './dto/create-seo-section.dto';
import { UpdateSeoSectionDto } from './dto/update-seo-section.dto';

@Injectable()
export class SeoSectionService {
  create(createSeoSectionDto: CreateSeoSectionDto) {
    return 'This action adds a new seoSection';
  }

  findAll() {
    return `This action returns all seoSection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seoSection`;
  }

  update(id: number, updateSeoSectionDto: UpdateSeoSectionDto) {
    return `This action updates a #${id} seoSection`;
  }

  remove(id: number) {
    return `This action removes a #${id} seoSection`;
  }
}
