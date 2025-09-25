import { Injectable } from '@nestjs/common';
import { CreateHomeContentDto } from './dto/create-home-content.dto';
import { UpdateHomeContentDto } from './dto/update-home-content.dto';

@Injectable()
export class HomeContentService {
  create(createHomeContentDto: CreateHomeContentDto) {
    return 'This action adds a new homeContent';
  }

  findAll() {
    return `This action returns all homeContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeContent`;
  }

  update(id: number, updateHomeContentDto: UpdateHomeContentDto) {
    return `This action updates a #${id} homeContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeContent`;
  }
}
