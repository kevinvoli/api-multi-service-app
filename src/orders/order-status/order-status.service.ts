import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrderStatus } from './entities/order-status.entity';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectRepository(OrderStatus)
    private readonly orderStatusRepository: Repository<OrderStatus>,
  ) {}

  create(createOrderStatusDto: CreateOrderStatusDto) {
    const status = this.orderStatusRepository.create(createOrderStatusDto);
    return this.orderStatusRepository.save(status);
  }

  findAll() {
    return this.orderStatusRepository.find();
  }

  findOne(id: number) {
    return this.orderStatusRepository.findOne({ where: { iOrderStatusId: id } });
  }

  async update(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    await this.orderStatusRepository.update(id, updateOrderStatusDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.orderStatusRepository.delete(id);
  }
}
