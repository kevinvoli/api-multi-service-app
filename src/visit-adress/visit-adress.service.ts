import { Injectable } from '@nestjs/common';
import { CreateVisitAdressDto } from './dto/create-visit-adress.dto';
import { UpdateVisitAdressDto } from './dto/update-visit-adress.dto';

@Injectable()
export class VisitAdressService {
  create(createVisitAdressDto: CreateVisitAdressDto) {
    return 'This action adds a new visitAdress';
  }

  findAll() {
    return `This action returns all visitAdress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitAdress`;
  }

  update(id: number, updateVisitAdressDto: UpdateVisitAdressDto) {
    return `This action updates a #${id} visitAdress`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitAdress`;
  }
}
