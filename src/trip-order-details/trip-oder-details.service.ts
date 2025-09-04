import { Injectable } from '@nestjs/common';
import { CreateTripOderDetailDto } from './dto/create-trip-oder-detail.dto';
import { UpdateTripOderDetailDto } from './dto/update-trip-oder-detail.dto';

@Injectable()
export class TripOderDetailsService {
  create(createTripOderDetailDto: CreateTripOderDetailDto) {
    return 'This action adds a new tripOderDetail';
  }

  findAll() {
    return `This action returns all tripOderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripOderDetail`;
  }

  update(id: number, updateTripOderDetailDto: UpdateTripOderDetailDto) {
    return `This action updates a #${id} tripOderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripOderDetail`;
  }
}
