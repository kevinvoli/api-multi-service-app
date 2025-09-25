import { Injectable } from '@nestjs/common';
import { CreateCustomDeliveryChargesOrderDto } from './dto/create-custom-delivery-charges-order.dto';
import { UpdateCustomDeliveryChargesOrderDto } from './dto/update-custom-delivery-charges-order.dto';

@Injectable()
export class CustomDeliveryChargesOrderService {
  create(createCustomDeliveryChargesOrderDto: CreateCustomDeliveryChargesOrderDto) {
    return 'This action adds a new customDeliveryChargesOrder';
  }

  findAll() {
    return `This action returns all customDeliveryChargesOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customDeliveryChargesOrder`;
  }

  update(id: number, updateCustomDeliveryChargesOrderDto: UpdateCustomDeliveryChargesOrderDto) {
    return `This action updates a #${id} customDeliveryChargesOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} customDeliveryChargesOrder`;
  }
}
