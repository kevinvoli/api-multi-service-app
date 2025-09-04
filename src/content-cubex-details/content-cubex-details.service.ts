import { Injectable } from '@nestjs/common';
import { CreateContentCubexDetailDto } from './dto/create-content-cubex-detail.dto';
import { UpdateContentCubexDetailDto } from './dto/update-content-cubex-detail.dto';

@Injectable()
export class ContentCubexDetailsService {
  create(createContentCubexDetailDto: CreateContentCubexDetailDto) {
    return 'This action adds a new contentCubexDetail';
  }

  findAll() {
    return `This action returns all contentCubexDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contentCubexDetail`;
  }

  update(id: number, updateContentCubexDetailDto: UpdateContentCubexDetailDto) {
    return `This action updates a #${id} contentCubexDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} contentCubexDetail`;
  }
}
