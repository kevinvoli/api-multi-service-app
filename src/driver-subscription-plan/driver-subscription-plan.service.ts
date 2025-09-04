import { Injectable } from '@nestjs/common';
import { CreateDriverSubscriptionPlanDto } from './dto/create-driver-subscription-plan.dto';
import { UpdateDriverSubscriptionPlanDto } from './dto/update-driver-subscription-plan.dto';

@Injectable()
export class DriverSubscriptionPlanService {
  create(createDriverSubscriptionPlanDto: CreateDriverSubscriptionPlanDto) {
    return 'This action adds a new driverSubscriptionPlan';
  }

  findAll() {
    return `This action returns all driverSubscriptionPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverSubscriptionPlan`;
  }

  update(id: number, updateDriverSubscriptionPlanDto: UpdateDriverSubscriptionPlanDto) {
    return `This action updates a #${id} driverSubscriptionPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverSubscriptionPlan`;
  }
}
