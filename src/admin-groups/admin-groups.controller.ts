import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminGroupsService } from './admin-groups.service';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';

@Controller('admin-groups')
export class AdminGroupsController {
  constructor(private readonly adminGroupsService: AdminGroupsService) {}

  @Post()
  create(@Body() createAdminGroupDto: CreateAdminGroupDto) {
    return this.adminGroupsService.create(createAdminGroupDto);
  }

  @Get()
  findAll() {
    return this.adminGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminGroupDto: UpdateAdminGroupDto) {
    return this.adminGroupsService.update(+id, updateAdminGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminGroupsService.remove(+id);
  }
}
