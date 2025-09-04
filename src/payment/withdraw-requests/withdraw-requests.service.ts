import { Injectable } from '@nestjs/common';
import { CreateWithdrawRequestDto } from './dto/create-withdraw-request.dto';
import { UpdateWithdrawRequestDto } from './dto/update-withdraw-request.dto';

@Injectable()
export class WithdrawRequestsService {
  create(createWithdrawRequestDto: CreateWithdrawRequestDto) {
    return 'This action adds a new withdrawRequest';
  }

  findAll() {
    return `This action returns all withdrawRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} withdrawRequest`;
  }

  update(id: number, updateWithdrawRequestDto: UpdateWithdrawRequestDto) {
    return `This action updates a #${id} withdrawRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} withdrawRequest`;
  }
}
