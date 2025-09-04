import { Injectable } from '@nestjs/common';
import { CreateCancelReasonDto } from './dto/create-cancel-reason.dto';
import { UpdateCancelReasonDto } from './dto/update-cancel-reason.dto';

@Injectable()
export class CancelReasonService {
  create(createCancelReasonDto: CreateCancelReasonDto) {
    return 'This action adds a new cancelReason';
  }

  findAll() {
    return `This action returns all cancelReason`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancelReason`;
  }

  update(id: number, updateCancelReasonDto: UpdateCancelReasonDto) {
    return `This action updates a #${id} cancelReason`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancelReason`;
  }
}
