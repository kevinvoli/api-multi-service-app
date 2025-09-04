import { Injectable } from '@nestjs/common';
import { CreateOrderRequestDto } from './dto/create-order-request.dto';
import { UpdateOrderRequestDto } from './dto/update-order-request.dto';

@Injectable()
export class OrderRequestService {
  create(createOrderRequestDto: CreateOrderRequestDto) {
    return 'This action adds a new orderRequest';
  }

  findAll() {
    return `This action returns all orderRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderRequest`;
  }

  update(id: number, updateOrderRequestDto: UpdateOrderRequestDto) {
    return `This action updates a #${id} orderRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderRequest`;
  }
}
