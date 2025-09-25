import { Injectable } from '@nestjs/common';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';

@Injectable()
export class AdminAlertsService {
  create(createAdminAlertDto: CreateAdminAlertDto) {
    return 'This action adds a new adminAlert';
  }

  findAll() {
    return `This action returns all adminAlerts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminAlert`;
  }

  update(id: number, updateAdminAlertDto: UpdateAdminAlertDto) {
    return `This action updates a #${id} adminAlert`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminAlert`;
  }
}
