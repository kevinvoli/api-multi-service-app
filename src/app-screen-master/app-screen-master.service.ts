import { Injectable } from '@nestjs/common';
import { CreateAppScreenMasterDto } from './dto/create-app-screen-master.dto';
import { UpdateAppScreenMasterDto } from './dto/update-app-screen-master.dto';

@Injectable()
export class AppScreenMasterService {
  create(createAppScreenMasterDto: CreateAppScreenMasterDto) {
    return 'This action adds a new appScreenMaster';
  }

  findAll() {
    return `This action returns all appScreenMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appScreenMaster`;
  }

  update(id: number, updateAppScreenMasterDto: UpdateAppScreenMasterDto) {
    return `This action updates a #${id} appScreenMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} appScreenMaster`;
  }
}
