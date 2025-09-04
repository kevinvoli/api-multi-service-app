import { Injectable } from '@nestjs/common';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';

@Injectable()
export class CabBookingService {
  create(createCabBookingDto: CreateCabBookingDto) {
    return 'This action adds a new cabBooking';
  }

  findAll() {
    return `This action returns all cabBooking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cabBooking`;
  }

  update(id: number, updateCabBookingDto: UpdateCabBookingDto) {
    return `This action updates a #${id} cabBooking`;
  }

  remove(id: number) {
    return `This action removes a #${id} cabBooking`;
  }
}
