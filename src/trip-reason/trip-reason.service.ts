import { Injectable } from '@nestjs/common';
import { CreateTripReasonDto } from './dto/create-trip-reason.dto';
import { UpdateTripReasonDto } from './dto/update-trip-reason.dto';

@Injectable()
export class TripReasonService {
  create(createTripReasonDto: CreateTripReasonDto) {
    return 'This action adds a new tripReason';
  }

  findAll() {
    return `This action returns all tripReason`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripReason`;
  }

  update(id: number, updateTripReasonDto: UpdateTripReasonDto) {
    return `This action updates a #${id} tripReason`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripReason`;
  }
}
