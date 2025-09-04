import { Injectable } from '@nestjs/common';
import { CreateTripMessageDto } from './dto/create-trip-message.dto';
import { UpdateTripMessageDto } from './dto/update-trip-message.dto';

@Injectable()
export class TripMessagesService {
  create(createTripMessageDto: CreateTripMessageDto) {
    return 'This action adds a new tripMessage';
  }

  findAll() {
    return `This action returns all tripMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripMessage`;
  }

  update(id: number, updateTripMessageDto: UpdateTripMessageDto) {
    return `This action updates a #${id} tripMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripMessage`;
  }
}
