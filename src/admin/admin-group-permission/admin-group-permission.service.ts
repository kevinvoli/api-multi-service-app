import { Injectable } from '@nestjs/common';
import { CreateAdminGroupPermissionDto } from './dto/create-admin-group-permission.dto';
import { UpdateAdminGroupPermissionDto } from './dto/update-admin-group-permission.dto';

@Injectable()
export class AdminGroupPermissionService {
  create(createAdminGroupPermissionDto: CreateAdminGroupPermissionDto) {
    return 'This action adds a new adminGroupPermission';
  }

  findAll() {
    return `This action returns all adminGroupPermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminGroupPermission`;
  }

  update(id: number, updateAdminGroupPermissionDto: UpdateAdminGroupPermissionDto) {
    return `This action updates a #${id} adminGroupPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminGroupPermission`;
  }
}
