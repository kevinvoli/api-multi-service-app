import { Injectable } from '@nestjs/common';
import { CreateHomeDriverDto } from './dto/create-home-driver.dto';
import { UpdateHomeDriverDto } from './dto/update-home-driver.dto';

@Injectable()
export class HomeDriverService {
  create(createHomeDriverDto: CreateHomeDriverDto) {
    return 'This action adds a new homeDriver';
  }

  findAll() {
    return `This action returns all homeDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeDriver`;
  }

  update(id: number, updateHomeDriverDto: UpdateHomeDriverDto) {
    return `This action updates a #${id} homeDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeDriver`;
  }
}
