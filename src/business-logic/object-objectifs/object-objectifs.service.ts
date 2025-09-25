import { Injectable } from '@nestjs/common';
import { CreateObjectObjectifDto } from './dto/create-object-objectif.dto';
import { UpdateObjectObjectifDto } from './dto/update-object-objectif.dto';

@Injectable()
export class ObjectObjectifsService {
  create(createObjectObjectifDto: CreateObjectObjectifDto) {
    return 'This action adds a new objectObjectif';
  }

  findAll() {
    return `This action returns all objectObjectifs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectObjectif`;
  }

  update(id: number, updateObjectObjectifDto: UpdateObjectObjectifDto) {
    return `This action updates a #${id} objectObjectif`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectObjectif`;
  }
}
