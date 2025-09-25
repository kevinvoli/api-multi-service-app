import { Injectable } from '@nestjs/common';
import { CreateDriverRequestDto } from './dto/create-driver-request.dto';
import { UpdateDriverRequestDto } from './dto/update-driver-request.dto';

@Injectable()
export class DriverRequestService {
  create(createDriverRequestDto: CreateDriverRequestDto) {
    return 'This action adds a new driverRequest';
  }

  findAll() {
    return `This action returns all driverRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverRequest`;
  }

  update(id: number, updateDriverRequestDto: UpdateDriverRequestDto) {
    return `This action updates a #${id} driverRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverRequest`;
  }
}
