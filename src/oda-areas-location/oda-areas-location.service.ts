import { Injectable } from '@nestjs/common';
import { CreateOdaAreasLocationDto } from './dto/create-oda-areas-location.dto';
import { UpdateOdaAreasLocationDto } from './dto/update-oda-areas-location.dto';

@Injectable()
export class OdaAreasLocationService {
  create(createOdaAreasLocationDto: CreateOdaAreasLocationDto) {
    return 'This action adds a new odaAreasLocation';
  }

  findAll() {
    return `This action returns all odaAreasLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaAreasLocation`;
  }

  update(id: number, updateOdaAreasLocationDto: UpdateOdaAreasLocationDto) {
    return `This action updates a #${id} odaAreasLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaAreasLocation`;
  }
}
