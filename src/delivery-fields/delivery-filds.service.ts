import { Injectable } from '@nestjs/common';
import { CreateDeliveryFildDto } from './dto/create-delivery-fild.dto';
import { UpdateDeliveryFildDto } from './dto/update-delivery-fild.dto';

@Injectable()
export class DeliveryFildsService {
  create(createDeliveryFildDto: CreateDeliveryFildDto) {
    return 'This action adds a new deliveryFild';
  }

  findAll() {
    return `This action returns all deliveryFilds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryFild`;
  }

  update(id: number, updateDeliveryFildDto: UpdateDeliveryFildDto) {
    return `This action updates a #${id} deliveryFild`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryFild`;
  }
}
