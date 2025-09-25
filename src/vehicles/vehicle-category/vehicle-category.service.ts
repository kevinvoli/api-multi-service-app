import { Injectable } from '@nestjs/common';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';

@Injectable()
export class VehicleCategoryService {
  create(createVehicleCategoryDto: CreateVehicleCategoryDto) {
    return 'This action adds a new vehicleCategory';
  }

  findAll() {
    return `This action returns all vehicleCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleCategory`;
  }

  update(id: number, updateVehicleCategoryDto: UpdateVehicleCategoryDto) {
    return `This action updates a #${id} vehicleCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleCategory`;
  }
}
