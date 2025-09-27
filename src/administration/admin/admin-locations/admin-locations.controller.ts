import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminLocationsService } from './admin-locations.service';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminLocations } from './entities/admin-location.entity';

@ApiTags('Admin Locations')
@Controller('admin-locations')
export class AdminLocationsController {
  constructor(private readonly adminLocationsService: AdminLocationsService) {}

  @Post()
  @ApiOperation({ summary: 'Assign a location to an admin' })
  @ApiResponse({ status: 201, description: 'The location has been successfully assigned.', type: AdminLocations })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDto: CreateAdminLocationDto): Promise<AdminLocations> {
    return this.adminLocationsService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all admin-location assignments' })
  @ApiResponse({ status: 200, description: 'Return all assignments.', type: [AdminLocations] })
  findAll(): Promise<AdminLocations[]> {
    return this.adminLocationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an admin-location assignment by ID' })
  @ApiResponse({ status: 200, description: 'Return the assignment.', type: AdminLocations })
  @ApiResponse({ status: 404, description: 'Assignment not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AdminLocations> {
    return this.adminLocationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an admin-location assignment' })
  @ApiResponse({ status: 200, description: 'The assignment has been successfully updated.', type: AdminLocations })
  @ApiResponse({ status: 404, description: 'Assignment not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateAdminLocationDto): Promise<AdminLocations> {
    return this.adminLocationsService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an admin-location assignment' })
  @ApiResponse({ status: 200, description: 'The assignment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Assignment not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.adminLocationsService.remove(id);
  }
}