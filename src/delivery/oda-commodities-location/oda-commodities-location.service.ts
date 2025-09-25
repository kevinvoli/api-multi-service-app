import { Injectable } from '@nestjs/common';
import { CreateOdaCommoditiesLocationDto } from './dto/create-oda-commodities-location.dto';
import { UpdateOdaCommoditiesLocationDto } from './dto/update-oda-commodities-location.dto';

@Injectable()
export class OdaCommoditiesLocationService {
  create(createOdaCommoditiesLocationDto: CreateOdaCommoditiesLocationDto) {
    return 'This action adds a new odaCommoditiesLocation';
  }

  findAll() {
    return `This action returns all odaCommoditiesLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaCommoditiesLocation`;
  }

  update(id: number, updateOdaCommoditiesLocationDto: UpdateOdaCommoditiesLocationDto) {
    return `This action updates a #${id} odaCommoditiesLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaCommoditiesLocation`;
  }
}
