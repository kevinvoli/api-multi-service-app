import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';

@ApiTags('Admin Permissions Display Groups')
@Controller('admin-permissions-display-groups')
export class AdminPermissionsDisplayGroupsController {
  constructor(private readonly service: AdminPermissionsDisplayGroupsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new permission display group' })
  @ApiResponse({ status: 201, description: 'The group has been successfully created.', type: AdminPermissionDisplayGroups })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDto: CreateAdminPermissionsDisplayGroupDto): Promise<AdminPermissionDisplayGroups> {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all permission display groups' })
  @ApiResponse({ status: 200, description: 'Return all groups.', type: [AdminPermissionDisplayGroups] })
  findAll(): Promise<AdminPermissionDisplayGroups[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a permission display group by ID' })
  @ApiResponse({ status: 200, description: 'Return the group.', type: AdminPermissionDisplayGroups })
  @ApiResponse({ status: 404, description: 'Group not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AdminPermissionDisplayGroups> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a permission display group' })
  @ApiResponse({ status: 200, description: 'The group has been successfully updated.', type: AdminPermissionDisplayGroups })
  @ApiResponse({ status: 404, description: 'Group not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateAdminPermissionsDisplayGroupDto): Promise<AdminPermissionDisplayGroups> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a permission display group' })
  @ApiResponse({ status: 200, description: 'The group has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Group not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.service.remove(id);
  }
}