import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminAlertsService } from './admin-alerts.service';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';

@Controller('admin-alerts')
export class AdminAlertsController {
  constructor(private readonly adminAlertsService: AdminAlertsService) {}

  @Post()
  create(@Body() createAdminAlertDto: CreateAdminAlertDto) {
    return this.adminAlertsService.create(createAdminAlertDto);
  }

  @Get()
  findAll() {
    return this.adminAlertsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminAlertsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminAlertDto: UpdateAdminAlertDto) {
    return this.adminAlertsService.update(+id, updateAdminAlertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminAlertsService.remove(+id);
  }
}
