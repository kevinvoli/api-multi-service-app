import { Injectable } from '@nestjs/common';
import { CreateObjectProspectionDto } from './dto/create-object-prospection.dto';
import { UpdateObjectProspectionDto } from './dto/update-object-prospection.dto';

@Injectable()
export class ObjectProspectionsService {
  create(createObjectProspectionDto: CreateObjectProspectionDto) {
    return 'This action adds a new objectProspection';
  }

  findAll() {
    return `This action returns all objectProspections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectProspection`;
  }

  update(id: number, updateObjectProspectionDto: UpdateObjectProspectionDto) {
    return `This action updates a #${id} objectProspection`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectProspection`;
  }
}
