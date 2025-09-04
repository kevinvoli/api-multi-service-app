import { Injectable } from '@nestjs/common';
import { CreateTripDeliveryFieldDto } from './dto/create-trip-delivery-field.dto';
import { UpdateTripDeliveryFieldDto } from './dto/update-trip-delivery-field.dto';

@Injectable()
export class TripDeliveryFieldsService {
  create(createTripDeliveryFieldDto: CreateTripDeliveryFieldDto) {
    return 'This action adds a new tripDeliveryField';
  }

  findAll() {
    return `This action returns all tripDeliveryFields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripDeliveryField`;
  }

  update(id: number, updateTripDeliveryFieldDto: UpdateTripDeliveryFieldDto) {
    return `This action updates a #${id} tripDeliveryField`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripDeliveryField`;
  }
}
