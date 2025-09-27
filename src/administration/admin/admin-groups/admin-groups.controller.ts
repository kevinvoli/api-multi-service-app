import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminGroupsService } from './admin-groups.service';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminGroups } from './entities/admin-group.entity';

@ApiTags('Admin Groups')
@Controller('admin-groups')
export class AdminGroupsController {
  constructor(private readonly adminGroupsService: AdminGroupsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new admin group' })
  @ApiResponse({ status: 201, description: 'The group has been successfully created.', type: AdminGroups })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDto: CreateAdminGroupDto): Promise<AdminGroups> {
    return this.adminGroupsService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all admin groups' })
  @ApiResponse({ status: 200, description: 'Return all groups.', type: [AdminGroups] })
  findAll(): Promise<AdminGroups[]> {
    return this.adminGroupsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an admin group by ID' })
  @ApiResponse({ status: 200, description: 'Return the group.', type: AdminGroups })
  @ApiResponse({ status: 404, description: 'Group not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AdminGroups> {
    return this.adminGroupsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an admin group' })
  @ApiResponse({ status: 200, description: 'The group has been successfully updated.', type: AdminGroups })
  @ApiResponse({ status: 404, description: 'Group not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateAdminGroupDto): Promise<AdminGroups> {
    return this.adminGroupsService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an admin group' })
  @ApiResponse({ status: 200, description: 'The group has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Group not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.adminGroupsService.remove(id);
  }
}