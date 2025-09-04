import { Injectable } from '@nestjs/common';
import { CreateOdaCommuneDto } from './dto/create-oda-commune.dto';
import { UpdateOdaCommuneDto } from './dto/update-oda-commune.dto';

@Injectable()
export class OdaCommunesService {
  create(createOdaCommuneDto: CreateOdaCommuneDto) {
    return 'This action adds a new odaCommune';
  }

  findAll() {
    return `This action returns all odaCommunes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaCommune`;
  }

  update(id: number, updateOdaCommuneDto: UpdateOdaCommuneDto) {
    return `This action updates a #${id} odaCommune`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaCommune`;
  }
}
