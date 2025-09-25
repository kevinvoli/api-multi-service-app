import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';

@Controller('admin-permissions-display-groups')
export class AdminPermissionsDisplayGroupsController {
  constructor(private readonly adminPermissionsDisplayGroupsService: AdminPermissionsDisplayGroupsService) {}

  @Post()
  create(@Body() createAdminPermissionsDisplayGroupDto: CreateAdminPermissionsDisplayGroupDto) {
    return this.adminPermissionsDisplayGroupsService.create(createAdminPermissionsDisplayGroupDto);
  }

  @Get()
  findAll() {
    return this.adminPermissionsDisplayGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminPermissionsDisplayGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminPermissionsDisplayGroupDto: UpdateAdminPermissionsDisplayGroupDto) {
    return this.adminPermissionsDisplayGroupsService.update(+id, updateAdminPermissionsDisplayGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminPermissionsDisplayGroupsService.remove(+id);
  }
}
