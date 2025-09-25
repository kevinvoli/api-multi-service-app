import { Injectable } from '@nestjs/common';
import { CreatePassengerRequestDto } from './dto/create-passenger-request.dto';
import { UpdatePassengerRequestDto } from './dto/update-passenger-request.dto';

@Injectable()
export class PassengerRequestsService {
  create(createPassengerRequestDto: CreatePassengerRequestDto) {
    return 'This action adds a new passengerRequest';
  }

  findAll() {
    return `This action returns all passengerRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passengerRequest`;
  }

  update(id: number, updatePassengerRequestDto: UpdatePassengerRequestDto) {
    return `This action updates a #${id} passengerRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} passengerRequest`;
  }
}
