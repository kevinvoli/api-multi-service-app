import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderStatusLogDto } from './dto/create-order-status-log.dto';
import { UpdateOrderStatusLogDto } from './dto/update-order-status-log.dto';
import { OrderStatusLogs } from './entities/order-status-log.entity';

@Injectable()
export class OrderStatusLogsService {
  constructor(
    @InjectRepository(OrderStatusLogs)
    private readonly orderStatusLogRepository: Repository<OrderStatusLogs>,
  ) {}

  create(createOrderStatusLogDto: CreateOrderStatusLogDto) {
    const log = this.orderStatusLogRepository.create(createOrderStatusLogDto);
    return this.orderStatusLogRepository.save(log);
  }

  findAll() {
    return this.orderStatusLogRepository.find();
  }

  findOne(id: number) {
    return this.orderStatusLogRepository.findOne({ where: { iOrderLogId: id } });
  }

  async update(id: number, updateOrderStatusLogDto: UpdateOrderStatusLogDto) {
    await this.orderStatusLogRepository.update(id, updateOrderStatusLogDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.orderStatusLogRepository.delete(id);
  }
}
