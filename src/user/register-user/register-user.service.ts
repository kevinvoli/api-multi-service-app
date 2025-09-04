import { Injectable } from '@nestjs/common';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';

@Injectable()
export class RegisterUserService {
  create(createRegisterUserDto: CreateRegisterUserDto) {
    return 'This action adds a new registerUser';
  }

  findAll() {
    return `This action returns all registerUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerUser`;
  }

  update(id: number, updateRegisterUserDto: UpdateRegisterUserDto) {
    return `This action updates a #${id} registerUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerUser`;
  }
}
