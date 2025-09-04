import { Injectable } from '@nestjs/common';
import { CreateTempTripOrderDetailDto } from './dto/create-temp-trip-order-detail.dto';
import { UpdateTempTripOrderDetailDto } from './dto/update-temp-trip-order-detail.dto';

@Injectable()
export class TempTripOrderDetailsService {
  create(createTempTripOrderDetailDto: CreateTempTripOrderDetailDto) {
    return 'This action adds a new tempTripOrderDetail';
  }

  findAll() {
    return `This action returns all tempTripOrderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tempTripOrderDetail`;
  }

  update(id: number, updateTempTripOrderDetailDto: UpdateTempTripOrderDetailDto) {
    return `This action updates a #${id} tempTripOrderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} tempTripOrderDetail`;
  }
}
