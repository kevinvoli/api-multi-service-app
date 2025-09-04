import { Injectable } from '@nestjs/common';
import { CreateDeliveryChargeDto } from './dto/create-delivery-charge.dto';
import { UpdateDeliveryChargeDto } from './dto/update-delivery-charge.dto';

@Injectable()
export class DeliveryChargesService {
  create(createDeliveryChargeDto: CreateDeliveryChargeDto) {
    return 'This action adds a new deliveryCharge';
  }

  findAll() {
    return `This action returns all deliveryCharges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryCharge`;
  }

  update(id: number, updateDeliveryChargeDto: UpdateDeliveryChargeDto) {
    return `This action updates a #${id} deliveryCharge`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryCharge`;
  }
}
