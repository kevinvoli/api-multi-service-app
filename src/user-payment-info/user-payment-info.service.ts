import { Injectable } from '@nestjs/common';
import { CreateUserPaymentInfoDto } from './dto/create-user-payment-info.dto';
import { UpdateUserPaymentInfoDto } from './dto/update-user-payment-info.dto';

@Injectable()
export class UserPaymentInfoService {
  create(createUserPaymentInfoDto: CreateUserPaymentInfoDto) {
    return 'This action adds a new userPaymentInfo';
  }

  findAll() {
    return `This action returns all userPaymentInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPaymentInfo`;
  }

  update(id: number, updateUserPaymentInfoDto: UpdateUserPaymentInfoDto) {
    return `This action updates a #${id} userPaymentInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPaymentInfo`;
  }
}
