import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderRequestDto } from './dto/create-order-request.dto';
import { UpdateOrderRequestDto } from './dto/update-order-request.dto';
import { OrderRequest } from './entities/order-request.entity';

@Injectable()
export class OrderRequestService {
  constructor(
    @InjectRepository(OrderRequest)
    private readonly orderRequestRepository: Repository<OrderRequest>,
  ) {}

  create(createOrderRequestDto: CreateOrderRequestDto) {
    const request = this.orderRequestRepository.create(createOrderRequestDto);
    return this.orderRequestRepository.save(request);
  }

  findAll() {
    return this.orderRequestRepository.find();
  }

  findOne(id: number) {
    return this.orderRequestRepository.findOne({ where: { orderRequestId: id } });
  }

  async update(id: number, updateOrderRequestDto: UpdateOrderRequestDto) {
    await this.orderRequestRepository.update(id, updateOrderRequestDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.orderRequestRepository.delete(id);
  }
}
