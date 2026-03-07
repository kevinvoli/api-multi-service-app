import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDeliveryChargeDetails } from './entities/order-delivery-charge-detail.entity';
import { CreateOrderDeliveryChargeDetailDto } from './dto/create-order-delivery-charge-detail.dto';
import { UpdateOrderDeliveryChargeDetailDto } from './dto/update-order-delivery-charge-detail.dto';

@Injectable()
export class OrderDeliveryChargeDetailsService {
  constructor(
    @InjectRepository(OrderDeliveryChargeDetails)
    private readonly repository: Repository<OrderDeliveryChargeDetails>,
  ) {}

  async create(createDto: CreateOrderDeliveryChargeDetailDto): Promise<OrderDeliveryChargeDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OrderDeliveryChargeDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OrderDeliveryChargeDetails> {
    const entity = await this.repository.findOneBy({ iOrderDeliveryChargeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOrderDeliveryChargeDetailDto): Promise<OrderDeliveryChargeDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
