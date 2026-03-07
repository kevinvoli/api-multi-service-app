import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDriverLog } from './entities/order-driver-log.entity';
import { CreateOrderDriverLogDto } from './dto/create-order-driver-log.dto';
import { UpdateOrderDriverLogDto } from './dto/update-order-driver-log.dto';

@Injectable()
export class OrderDriverLogService {
  constructor(
    @InjectRepository(OrderDriverLog)
    private readonly repository: Repository<OrderDriverLog>,
  ) {}

  async create(createDto: CreateOrderDriverLogDto): Promise<OrderDriverLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OrderDriverLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OrderDriverLog> {
    const entity = await this.repository.findOneBy({ iLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOrderDriverLogDto): Promise<OrderDriverLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
