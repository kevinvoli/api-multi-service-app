import { Injectable } from '@nestjs/common';
import { CreateOrderDriverLogDto } from './dto/create-order-driver-log.dto';
import { UpdateOrderDriverLogDto } from './dto/update-order-driver-log.dto';

@Injectable()
export class OrderDriverLogService {
  create(createOrderDriverLogDto: CreateOrderDriverLogDto) {
    return 'This action adds a new orderDriverLog';
  }

  findAll() {
    return `This action returns all orderDriverLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDriverLog`;
  }

  update(id: number, updateOrderDriverLogDto: UpdateOrderDriverLogDto) {
    return `This action updates a #${id} orderDriverLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDriverLog`;
  }
}
