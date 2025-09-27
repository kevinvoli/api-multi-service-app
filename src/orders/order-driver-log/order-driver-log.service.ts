import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDriverLogDto } from './dto/create-order-driver-log.dto';
import { UpdateOrderDriverLogDto } from './dto/update-order-driver-log.dto';
import { OrderDriverLog } from './entities/order-driver-log.entity';

@Injectable()
export class OrderDriverLogService {
  constructor(
    @InjectRepository(OrderDriverLog)
    private readonly orderDriverLogRepository: Repository<OrderDriverLog>,
  ) {}

  create(createOrderDriverLogDto: CreateOrderDriverLogDto) {
    const log = this.orderDriverLogRepository.create(createOrderDriverLogDto);
    return this.orderDriverLogRepository.save(log);
  }

  findAll() {
    return this.orderDriverLogRepository.find();
  }

  findOne(id: number) {
    return this.orderDriverLogRepository.findOne({ where: { iLogId: id } });
  }

  async update(id: number, updateOrderDriverLogDto: UpdateOrderDriverLogDto) {
    await this.orderDriverLogRepository.update(id, updateOrderDriverLogDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.orderDriverLogRepository.delete(id);
  }
}
