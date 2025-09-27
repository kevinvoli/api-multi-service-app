import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminAlertsService } from './admin-alerts.service';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';
import { ApiTags, ApiOperation, ApiResponse, PartialType } from '@nestjs/swagger';
import { AdminAlerts } from './entities/admin-alert.entity';

@ApiTags('Admin Alerts')
@Controller('admin-alerts')
export class AdminAlertsController {
  constructor(private readonly adminAlertsService: AdminAlertsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new admin alert' })
  @ApiResponse({ status: 201, description: 'The alert has been successfully created.', type: AdminAlerts })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createAdminAlertDto: CreateAdminAlertDto): Promise<AdminAlerts> {
    return this.adminAlertsService.create(createAdminAlertDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all admin alerts' })
  @ApiResponse({ status: 200, description: 'Return all alerts.', type: [AdminAlerts] })
  findAll(): Promise<AdminAlerts[]> {
    return this.adminAlertsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an admin alert by ID' })
  @ApiResponse({ status: 200, description: 'Return the alert.', type: AdminAlerts })
  @ApiResponse({ status: 404, description: 'Alert not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AdminAlerts> {
    return this.adminAlertsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an admin alert' })
  @ApiResponse({ status: 200, description: 'The alert has been successfully updated.', type: AdminAlerts })
  @ApiResponse({ status: 404, description: 'Alert not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAdminAlertDto: UpdateAdminAlertDto): Promise<AdminAlerts> {
    return this.adminAlertsService.update(id, updateAdminAlertDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an admin alert' })
  @ApiResponse({ status: 200, description: 'The alert has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Alert not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.adminAlertsService.remove(id);
  }
}