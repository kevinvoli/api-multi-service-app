import { Injectable } from '@nestjs/common';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';

@Injectable()
export class AdminPermissionsDisplayGroupsService {
  create(createAdminPermissionsDisplayGroupDto: CreateAdminPermissionsDisplayGroupDto) {
    return 'This action adds a new adminPermissionsDisplayGroup';
  }

  findAll() {
    return `This action returns all adminPermissionsDisplayGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminPermissionsDisplayGroup`;
  }

  update(id: number, updateAdminPermissionsDisplayGroupDto: UpdateAdminPermissionsDisplayGroupDto) {
    return `This action updates a #${id} adminPermissionsDisplayGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminPermissionsDisplayGroup`;
  }
}
