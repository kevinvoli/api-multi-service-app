import { Injectable } from '@nestjs/common';
import { CreateDriverDocDto } from './dto/create-driver-doc.dto';
import { UpdateDriverDocDto } from './dto/update-driver-doc.dto';

@Injectable()
export class DriverDocService {
  create(createDriverDocDto: CreateDriverDocDto) {
    return 'This action adds a new driverDoc';
  }

  findAll() {
    return `This action returns all driverDoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverDoc`;
  }

  update(id: number, updateDriverDocDto: UpdateDriverDocDto) {
    return `This action updates a #${id} driverDoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverDoc`;
  }
}
