import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminPermissionsService } from './admin-permissions.service';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';

@Controller('admin-permissions')
export class AdminPermissionsController {
  constructor(private readonly adminPermissionsService: AdminPermissionsService) {}

  @Post()
  create(@Body() createAdminPermissionDto: CreateAdminPermissionDto) {
    return this.adminPermissionsService.create(createAdminPermissionDto);
  }

  @Get()
  findAll() {
    return this.adminPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminPermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminPermissionDto: UpdateAdminPermissionDto) {
    return this.adminPermissionsService.update(+id, updateAdminPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminPermissionsService.remove(+id);
  }
}
