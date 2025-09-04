import { Injectable } from '@nestjs/common';
import { CreateSetupInfoDto } from './dto/create-setup-info.dto';
import { UpdateSetupInfoDto } from './dto/update-setup-info.dto';

@Injectable()
export class SetupInfoService {
  create(createSetupInfoDto: CreateSetupInfoDto) {
    return 'This action adds a new setupInfo';
  }

  findAll() {
    return `This action returns all setupInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setupInfo`;
  }

  update(id: number, updateSetupInfoDto: UpdateSetupInfoDto) {
    return `This action updates a #${id} setupInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} setupInfo`;
  }
}
