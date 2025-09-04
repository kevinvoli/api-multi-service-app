import { Injectable } from '@nestjs/common';
import { CreateMasterVehicleCategoryDto } from './dto/create-master-vehicle-category.dto';
import { UpdateMasterVehicleCategoryDto } from './dto/update-master-vehicle-category.dto';

@Injectable()
export class MasterVehicleCategoryService {
  create(createMasterVehicleCategoryDto: CreateMasterVehicleCategoryDto) {
    return 'This action adds a new masterVehicleCategory';
  }

  findAll() {
    return `This action returns all masterVehicleCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterVehicleCategory`;
  }

  update(id: number, updateMasterVehicleCategoryDto: UpdateMasterVehicleCategoryDto) {
    return `This action updates a #${id} masterVehicleCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterVehicleCategory`;
  }
}
