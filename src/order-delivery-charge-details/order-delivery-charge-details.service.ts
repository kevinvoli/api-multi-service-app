import { Injectable } from '@nestjs/common';
import { CreateOrderDeliveryChargeDetailDto } from './dto/create-order-delivery-charge-detail.dto';
import { UpdateOrderDeliveryChargeDetailDto } from './dto/update-order-delivery-charge-detail.dto';

@Injectable()
export class OrderDeliveryChargeDetailsService {
  create(createOrderDeliveryChargeDetailDto: CreateOrderDeliveryChargeDetailDto) {
    return 'This action adds a new orderDeliveryChargeDetail';
  }

  findAll() {
    return `This action returns all orderDeliveryChargeDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDeliveryChargeDetail`;
  }

  update(id: number, updateOrderDeliveryChargeDetailDto: UpdateOrderDeliveryChargeDetailDto) {
    return `This action updates a #${id} orderDeliveryChargeDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDeliveryChargeDetail`;
  }
}
