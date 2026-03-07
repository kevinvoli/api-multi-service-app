import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderRequest } from './entities/order-request.entity';
import { CreateOrderRequestDto } from './dto/create-order-request.dto';
import { UpdateOrderRequestDto } from './dto/update-order-request.dto';

@Injectable()
export class OrderRequestService {
  constructor(
    @InjectRepository(OrderRequest)
    private readonly repository: Repository<OrderRequest>,
  ) {}

  async create(createDto: CreateOrderRequestDto): Promise<OrderRequest> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OrderRequest[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OrderRequest> {
    const entity = await this.repository.findOneBy({ orderRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOrderRequestDto): Promise<OrderRequest> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
