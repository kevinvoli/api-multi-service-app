import { Injectable } from '@nestjs/common';
import { CreateOdaItemsTypesLocationDto } from './dto/create-oda-items-types-location.dto';
import { UpdateOdaItemsTypesLocationDto } from './dto/update-oda-items-types-location.dto';

@Injectable()
export class OdaItemsTypesLocationService {
  create(createOdaItemsTypesLocationDto: CreateOdaItemsTypesLocationDto) {
    return 'This action adds a new odaItemsTypesLocation';
  }

  findAll() {
    return `This action returns all odaItemsTypesLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaItemsTypesLocation`;
  }

  update(id: number, updateOdaItemsTypesLocationDto: UpdateOdaItemsTypesLocationDto) {
    return `This action updates a #${id} odaItemsTypesLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaItemsTypesLocation`;
  }
}
