import { Injectable } from '@nestjs/common';
import { CreateMasterServiceCategoryDto } from './dto/create-master-service-category.dto';
import { UpdateMasterServiceCategoryDto } from './dto/update-master-service-category.dto';

@Injectable()
export class MasterServiceCategoryService {
  create(createMasterServiceCategoryDto: CreateMasterServiceCategoryDto) {
    return 'This action adds a new masterServiceCategory';
  }

  findAll() {
    return `This action returns all masterServiceCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterServiceCategory`;
  }

  update(id: number, updateMasterServiceCategoryDto: UpdateMasterServiceCategoryDto) {
    return `This action updates a #${id} masterServiceCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterServiceCategory`;
  }
}
