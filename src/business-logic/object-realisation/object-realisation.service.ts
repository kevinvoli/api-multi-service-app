import { Injectable } from '@nestjs/common';
import { CreateObjectRealisationDto } from './dto/create-object-realisation.dto';
import { UpdateObjectRealisationDto } from './dto/update-object-realisation.dto';

@Injectable()
export class ObjectRealisationService {
  create(createObjectRealisationDto: CreateObjectRealisationDto) {
    return 'This action adds a new objectRealisation';
  }

  findAll() {
    return `This action returns all objectRealisation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectRealisation`;
  }

  update(id: number, updateObjectRealisationDto: UpdateObjectRealisationDto) {
    return `This action updates a #${id} objectRealisation`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectRealisation`;
  }
}
