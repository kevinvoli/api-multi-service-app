import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminGroupPermissionService } from './admin-group-permission.service';
import { CreateAdminGroupPermissionDto } from './dto/create-admin-group-permission.dto';
import { UpdateAdminGroupPermissionDto } from './dto/update-admin-group-permission.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminGroupPermission } from './entities/admin-group-permission.entity';

@ApiTags('Admin Group Permissions')
@Controller('admin-group-permission')
export class AdminGroupPermissionController {
  constructor(private readonly adminGroupPermissionService: AdminGroupPermissionService) {}

  @Post()
  @ApiOperation({ summary: 'Assign a permission to a group' })
  @ApiResponse({ status: 201, description: 'The permission has been successfully assigned.', type: AdminGroupPermission })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDto: CreateAdminGroupPermissionDto): Promise<AdminGroupPermission> {
    return this.adminGroupPermissionService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all group-permission assignments' })
  @ApiResponse({ status: 200, description: 'Return all assignments.', type: [AdminGroupPermission] })
  findAll(): Promise<AdminGroupPermission[]> {
    return this.adminGroupPermissionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a group-permission assignment by ID' })
  @ApiResponse({ status: 200, description: 'Return the assignment.', type: AdminGroupPermission })
  @ApiResponse({ status: 404, description: 'Assignment not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AdminGroupPermission> {
    return this.adminGroupPermissionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a group-permission assignment' })
  @ApiResponse({ status: 200, description: 'The assignment has been successfully updated.', type: AdminGroupPermission })
  @ApiResponse({ status: 404, description: 'Assignment not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateAdminGroupPermissionDto): Promise<AdminGroupPermission> {
    return this.adminGroupPermissionService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a group-permission assignment' })
  @ApiResponse({ status: 200, description: 'The assignment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Assignment not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.adminGroupPermissionService.remove(id);
  }
}