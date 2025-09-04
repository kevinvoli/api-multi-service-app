import { Injectable } from '@nestjs/common';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';

@Injectable()
export class AdminPermissionsService {
  create(createAdminPermissionDto: CreateAdminPermissionDto) {
    return 'This action adds a new adminPermission';
  }

  findAll() {
    return `This action returns all adminPermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminPermission`;
  }

  update(id: number, updateAdminPermissionDto: UpdateAdminPermissionDto) {
    return `This action updates a #${id} adminPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminPermission`;
  }
}
