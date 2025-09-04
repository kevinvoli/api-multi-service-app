import { Injectable } from '@nestjs/common';
import { CreateUserReferrerTransactionDto } from './dto/create-user-referrer-transaction.dto';
import { UpdateUserReferrerTransactionDto } from './dto/update-user-referrer-transaction.dto';

@Injectable()
export class UserReferrerTransactionService {
  create(createUserReferrerTransactionDto: CreateUserReferrerTransactionDto) {
    return 'This action adds a new userReferrerTransaction';
  }

  findAll() {
    return `This action returns all userReferrerTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userReferrerTransaction`;
  }

  update(id: number, updateUserReferrerTransactionDto: UpdateUserReferrerTransactionDto) {
    return `This action updates a #${id} userReferrerTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} userReferrerTransaction`;
  }
}
