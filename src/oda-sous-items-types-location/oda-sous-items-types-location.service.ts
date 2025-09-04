import { Injectable } from '@nestjs/common';
import { CreateOdaSousItemsTypesLocationDto } from './dto/create-oda-sous-items-types-location.dto';
import { UpdateOdaSousItemsTypesLocationDto } from './dto/update-oda-sous-items-types-location.dto';

@Injectable()
export class OdaSousItemsTypesLocationService {
  create(createOdaSousItemsTypesLocationDto: CreateOdaSousItemsTypesLocationDto) {
    return 'This action adds a new odaSousItemsTypesLocation';
  }

  findAll() {
    return `This action returns all odaSousItemsTypesLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaSousItemsTypesLocation`;
  }

  update(id: number, updateOdaSousItemsTypesLocationDto: UpdateOdaSousItemsTypesLocationDto) {
    return `This action updates a #${id} odaSousItemsTypesLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaSousItemsTypesLocation`;
  }
}
