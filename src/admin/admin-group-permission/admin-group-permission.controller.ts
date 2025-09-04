import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminGroupPermissionService } from './admin-group-permission.service';
import { CreateAdminGroupPermissionDto } from './dto/create-admin-group-permission.dto';
import { UpdateAdminGroupPermissionDto } from './dto/update-admin-group-permission.dto';

@Controller('admin-group-permission')
export class AdminGroupPermissionController {
  constructor(private readonly adminGroupPermissionService: AdminGroupPermissionService) {}

  @Post()
  create(@Body() createAdminGroupPermissionDto: CreateAdminGroupPermissionDto) {
    return this.adminGroupPermissionService.create(createAdminGroupPermissionDto);
  }

  @Get()
  findAll() {
    return this.adminGroupPermissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminGroupPermissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminGroupPermissionDto: UpdateAdminGroupPermissionDto) {
    return this.adminGroupPermissionService.update(+id, updateAdminGroupPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminGroupPermissionService.remove(+id);
  }
}
