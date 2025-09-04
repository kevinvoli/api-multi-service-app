import { Injectable } from '@nestjs/common';
import { CreateTripHelpDetailDto } from './dto/create-trip-help-detail.dto';
import { UpdateTripHelpDetailDto } from './dto/update-trip-help-detail.dto';

@Injectable()
export class TripHelpDetailService {
  create(createTripHelpDetailDto: CreateTripHelpDetailDto) {
    return 'This action adds a new tripHelpDetail';
  }

  findAll() {
    return `This action returns all tripHelpDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripHelpDetail`;
  }

  update(id: number, updateTripHelpDetailDto: UpdateTripHelpDetailDto) {
    return `This action updates a #${id} tripHelpDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripHelpDetail`;
  }
}
