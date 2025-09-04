import { Injectable } from '@nestjs/common';
import { CreateTripTimeDto } from './dto/create-trip-time.dto';
import { UpdateTripTimeDto } from './dto/update-trip-time.dto';

@Injectable()
export class TripTimesService {
  create(createTripTimeDto: CreateTripTimeDto) {
    return 'This action adds a new tripTime';
  }

  findAll() {
    return `This action returns all tripTimes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripTime`;
  }

  update(id: number, updateTripTimeDto: UpdateTripTimeDto) {
    return `This action updates a #${id} tripTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripTime`;
  }
}
