import { Injectable } from '@nestjs/common';
import { CreatePlanPurchaseMasterDto } from './dto/create-plan-purchase-master.dto';
import { UpdatePlanPurchaseMasterDto } from './dto/update-plan-purchase-master.dto';

@Injectable()
export class PlanPurchaseMasterService {
  create(createPlanPurchaseMasterDto: CreatePlanPurchaseMasterDto) {
    return 'This action adds a new planPurchaseMaster';
  }

  findAll() {
    return `This action returns all planPurchaseMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planPurchaseMaster`;
  }

  update(id: number, updatePlanPurchaseMasterDto: UpdatePlanPurchaseMasterDto) {
    return `This action updates a #${id} planPurchaseMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} planPurchaseMaster`;
  }
}
