import { Injectable } from '@nestjs/common';
import { CreateDriverSubscriptionDetailDto } from './dto/create-driver-subscription-detail.dto';
import { UpdateDriverSubscriptionDetailDto } from './dto/update-driver-subscription-detail.dto';

@Injectable()
export class DriverSubscriptionDetailsService {
  create(createDriverSubscriptionDetailDto: CreateDriverSubscriptionDetailDto) {
    return 'This action adds a new driverSubscriptionDetail';
  }

  findAll() {
    return `This action returns all driverSubscriptionDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverSubscriptionDetail`;
  }

  update(id: number, updateDriverSubscriptionDetailDto: UpdateDriverSubscriptionDetailDto) {
    return `This action updates a #${id} driverSubscriptionDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverSubscriptionDetail`;
  }
}
