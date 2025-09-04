import { Injectable } from '@nestjs/common';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';

@Injectable()
export class AdminGroupsService {
  create(createAdminGroupDto: CreateAdminGroupDto) {
    return 'This action adds a new adminGroup';
  }

  findAll() {
    return `This action returns all adminGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminGroup`;
  }

  update(id: number, updateAdminGroupDto: UpdateAdminGroupDto) {
    return `This action updates a #${id} adminGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminGroup`;
  }
}
