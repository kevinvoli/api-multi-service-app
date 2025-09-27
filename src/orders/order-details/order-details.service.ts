import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetails } from './entities/order-detail.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetails)
    private readonly orderDetailRepository: Repository<OrderDetails>,
  ) {}

  create(createOrderDetailDto: CreateOrderDetailDto) {
    const orderDetail = this.orderDetailRepository.create(createOrderDetailDto);
    return this.orderDetailRepository.save(orderDetail);
  }

  findAll() {
    return this.orderDetailRepository.find();
  }

  findOne(id: number) {
    return this.orderDetailRepository.findOne({ where: { iOrderDetailId: id } });
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    await this.orderDetailRepository.update(id, updateOrderDetailDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.orderDetailRepository.delete(id);
  }
}
