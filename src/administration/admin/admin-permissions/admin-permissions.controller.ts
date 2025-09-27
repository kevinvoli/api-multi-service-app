import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminPermissionsService } from './admin-permissions.service';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminPermissions } from './entities/admin-permission.entity';

@ApiTags('Admin Permissions')
@Controller('admin-permissions')
export class AdminPermissionsController {
  constructor(private readonly adminPermissionsService: AdminPermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new admin permission' })
  @ApiResponse({ status: 201, description: 'The permission has been successfully created.', type: AdminPermissions })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDto: CreateAdminPermissionDto): Promise<AdminPermissions> {
    return this.adminPermissionsService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all admin permissions' })
  @ApiResponse({ status: 200, description: 'Return all permissions.', type: [AdminPermissions] })
  findAll(): Promise<AdminPermissions[]> {
    return this.adminPermissionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an admin permission by ID' })
  @ApiResponse({ status: 200, description: 'Return the permission.', type: AdminPermissions })
  @ApiResponse({ status: 404, description: 'Permission not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AdminPermissions> {
    return this.adminPermissionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an admin permission' })
  @ApiResponse({ status: 200, description: 'The permission has been successfully updated.', type: AdminPermissions })
  @ApiResponse({ status: 404, description: 'Permission not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateAdminPermissionDto): Promise<AdminPermissions> {
    return this.adminPermissionsService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an admin permission' })
  @ApiResponse({ status: 200, description: 'The permission has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Permission not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.adminPermissionsService.remove(id);
  }
}