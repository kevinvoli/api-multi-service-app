import { Injectable } from '@nestjs/common';
import { CreateRatingsUserDriverDto } from './dto/create-ratings-user-driver.dto';
import { UpdateRatingsUserDriverDto } from './dto/update-ratings-user-driver.dto';

@Injectable()
export class RatingsUserDriverService {
  create(createRatingsUserDriverDto: CreateRatingsUserDriverDto) {
    return 'This action adds a new ratingsUserDriver';
  }

  findAll() {
    return `This action returns all ratingsUserDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ratingsUserDriver`;
  }

  update(id: number, updateRatingsUserDriverDto: UpdateRatingsUserDriverDto) {
    return `This action updates a #${id} ratingsUserDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} ratingsUserDriver`;
  }
}
