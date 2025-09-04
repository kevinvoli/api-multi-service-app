import { Injectable } from '@nestjs/common';
import { CreateTripOutStandingAmountDto } from './dto/create-trip-out-standing-amount.dto';
import { UpdateTripOutStandingAmountDto } from './dto/update-trip-out-standing-amount.dto';

@Injectable()
export class TripOutStandingAmountService {
  create(createTripOutStandingAmountDto: CreateTripOutStandingAmountDto) {
    return 'This action adds a new tripOutStandingAmount';
  }

  findAll() {
    return `This action returns all tripOutStandingAmount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripOutStandingAmount`;
  }

  update(id: number, updateTripOutStandingAmountDto: UpdateTripOutStandingAmountDto) {
    return `This action updates a #${id} tripOutStandingAmount`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripOutStandingAmount`;
  }
}
