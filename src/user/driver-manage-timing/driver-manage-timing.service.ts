import { Injectable } from '@nestjs/common';
import { CreateDriverManageTimingDto } from './dto/create-driver-manage-timing.dto';
import { UpdateDriverManageTimingDto } from './dto/update-driver-manage-timing.dto';

@Injectable()
export class DriverManageTimingService {
  create(createDriverManageTimingDto: CreateDriverManageTimingDto) {
    return 'This action adds a new driverManageTiming';
  }

  findAll() {
    return `This action returns all driverManageTiming`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverManageTiming`;
  }

  update(id: number, updateDriverManageTimingDto: UpdateDriverManageTimingDto) {
    return `This action updates a #${id} driverManageTiming`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverManageTiming`;
  }
}
