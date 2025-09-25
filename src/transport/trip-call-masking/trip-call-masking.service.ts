import { Injectable } from '@nestjs/common';
import { CreateTripCallMaskingDto } from './dto/create-trip-call-masking.dto';
import { UpdateTripCallMaskingDto } from './dto/update-trip-call-masking.dto';

@Injectable()
export class TripCallMaskingService {
  create(createTripCallMaskingDto: CreateTripCallMaskingDto) {
    return 'This action adds a new tripCallMasking';
  }

  findAll() {
    return `This action returns all tripCallMasking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripCallMasking`;
  }

  update(id: number, updateTripCallMaskingDto: UpdateTripCallMaskingDto) {
    return `This action updates a #${id} tripCallMasking`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripCallMasking`;
  }
}
