import { Injectable } from '@nestjs/common';
import { CreateHelpDetailDto } from './dto/create-help-detail.dto';
import { UpdateHelpDetailDto } from './dto/update-help-detail.dto';

@Injectable()
export class HelpDetailService {
  create(createHelpDetailDto: CreateHelpDetailDto) {
    return 'This action adds a new helpDetail';
  }

  findAll() {
    return `This action returns all helpDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpDetail`;
  }

  update(id: number, updateHelpDetailDto: UpdateHelpDetailDto) {
    return `This action updates a #${id} helpDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpDetail`;
  }
}
