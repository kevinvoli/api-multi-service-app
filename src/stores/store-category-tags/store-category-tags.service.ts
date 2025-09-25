import { Injectable } from '@nestjs/common';
import { CreateStoreCategoryTagDto } from './dto/create-store-category-tag.dto';
import { UpdateStoreCategoryTagDto } from './dto/update-store-category-tag.dto';

@Injectable()
export class StoreCategoryTagsService {
  create(createStoreCategoryTagDto: CreateStoreCategoryTagDto) {
    return 'This action adds a new storeCategoryTag';
  }

  findAll() {
    return `This action returns all storeCategoryTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeCategoryTag`;
  }

  update(id: number, updateStoreCategoryTagDto: UpdateStoreCategoryTagDto) {
    return `This action updates a #${id} storeCategoryTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeCategoryTag`;
  }
}
