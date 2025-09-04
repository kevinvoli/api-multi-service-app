import { Injectable } from '@nestjs/common';
import { CreateUserFaveAddressDto } from './dto/create-user-fave-address.dto';
import { UpdateUserFaveAddressDto } from './dto/update-user-fave-address.dto';

@Injectable()
export class UserFaveAddressService {
  create(createUserFaveAddressDto: CreateUserFaveAddressDto) {
    return 'This action adds a new userFaveAddress';
  }

  findAll() {
    return `This action returns all userFaveAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFaveAddress`;
  }

  update(id: number, updateUserFaveAddressDto: UpdateUserFaveAddressDto) {
    return `This action updates a #${id} userFaveAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFaveAddress`;
  }
}
