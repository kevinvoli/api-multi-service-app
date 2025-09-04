import { Injectable } from '@nestjs/common';
import { CreateAppLaunchinfoDto } from './dto/create-app-launchinfo.dto';
import { UpdateAppLaunchinfoDto } from './dto/update-app-launchinfo.dto';

@Injectable()
export class AppLaunchinfoService {
  create(createAppLaunchinfoDto: CreateAppLaunchinfoDto) {
    return 'This action adds a new appLaunchinfo';
  }

  findAll() {
    return `This action returns all appLaunchinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appLaunchinfo`;
  }

  update(id: number, updateAppLaunchinfoDto: UpdateAppLaunchinfoDto) {
    return `This action updates a #${id} appLaunchinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} appLaunchinfo`;
  }
}
