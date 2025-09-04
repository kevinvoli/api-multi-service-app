import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminLocationsService } from './admin-locations.service';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';

@Controller('admin-locations')
export class AdminLocationsController {
  constructor(private readonly adminLocationsService: AdminLocationsService) {}

  @Post()
  create(@Body() createAdminLocationDto: CreateAdminLocationDto) {
    return this.adminLocationsService.create(createAdminLocationDto);
  }

  @Get()
  findAll() {
    return this.adminLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminLocationDto: UpdateAdminLocationDto) {
    return this.adminLocationsService.update(+id, updateAdminLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminLocationsService.remove(+id);
  }
}
