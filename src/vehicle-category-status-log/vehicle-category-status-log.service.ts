import { Injectable } from '@nestjs/common';
import { CreateVehicleCategoryStatusLogDto } from './dto/create-vehicle-category-status-log.dto';
import { UpdateVehicleCategoryStatusLogDto } from './dto/update-vehicle-category-status-log.dto';

@Injectable()
export class VehicleCategoryStatusLogService {
  create(createVehicleCategoryStatusLogDto: CreateVehicleCategoryStatusLogDto) {
    return 'This action adds a new vehicleCategoryStatusLog';
  }

  findAll() {
    return `This action returns all vehicleCategoryStatusLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleCategoryStatusLog`;
  }

  update(id: number, updateVehicleCategoryStatusLogDto: UpdateVehicleCategoryStatusLogDto) {
    return `This action updates a #${id} vehicleCategoryStatusLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleCategoryStatusLog`;
  }
}
