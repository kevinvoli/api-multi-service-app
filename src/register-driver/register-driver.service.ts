import { Injectable } from '@nestjs/common';
import { CreateRegisterDriverDto } from './dto/create-register-driver.dto';
import { UpdateRegisterDriverDto } from './dto/update-register-driver.dto';

@Injectable()
export class RegisterDriverService {
  create(createRegisterDriverDto: CreateRegisterDriverDto) {
    return 'This action adds a new registerDriver';
  }

  findAll() {
    return `This action returns all registerDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerDriver`;
  }

  update(id: number, updateRegisterDriverDto: UpdateRegisterDriverDto) {
    return `This action updates a #${id} registerDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerDriver`;
  }
}
