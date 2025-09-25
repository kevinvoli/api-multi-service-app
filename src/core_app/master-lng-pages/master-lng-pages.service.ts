import { Injectable } from '@nestjs/common';
import { CreateMasterLngPageDto } from './dto/create-master-lng-page.dto';
import { UpdateMasterLngPageDto } from './dto/update-master-lng-page.dto';

@Injectable()
export class MasterLngPagesService {
  create(createMasterLngPageDto: CreateMasterLngPageDto) {
    return 'This action adds a new masterLngPage';
  }

  findAll() {
    return `This action returns all masterLngPages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterLngPage`;
  }

  update(id: number, updateMasterLngPageDto: UpdateMasterLngPageDto) {
    return `This action updates a #${id} masterLngPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterLngPage`;
  }
}
