import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderStatusLogs } from './entities/order-status-log.entity';
import { CreateOrderStatusLogDto } from './dto/create-order-status-log.dto';
import { UpdateOrderStatusLogDto } from './dto/update-order-status-log.dto';

@Injectable()
export class OrderStatusLogsService {
  constructor(
    @InjectRepository(OrderStatusLogs)
    private readonly repository: Repository<OrderStatusLogs>,
  ) {}

  async create(createDto: CreateOrderStatusLogDto): Promise<OrderStatusLogs> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OrderStatusLogs[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OrderStatusLogs> {
    const entity = await this.repository.findOneBy({ iOrderLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOrderStatusLogDto): Promise<OrderStatusLogs> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
