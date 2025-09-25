import { Injectable } from '@nestjs/common';
import { CreateRelatedCommuneDto } from './dto/create-related-commune.dto';
import { UpdateRelatedCommuneDto } from './dto/update-related-commune.dto';

@Injectable()
export class RelatedCommunesService {
  create(createRelatedCommuneDto: CreateRelatedCommuneDto) {
    return 'This action adds a new relatedCommune';
  }

  findAll() {
    return `This action returns all relatedCommunes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relatedCommune`;
  }

  update(id: number, updateRelatedCommuneDto: UpdateRelatedCommuneDto) {
    return `This action updates a #${id} relatedCommune`;
  }

  remove(id: number) {
    return `This action removes a #${id} relatedCommune`;
  }
}
