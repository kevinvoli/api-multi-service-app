import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppScreenMasterService } from './app-screen-master.service';
import { CreateAppScreenMasterDto } from './dto/create-app-screen-master.dto';
import { UpdateAppScreenMasterDto } from './dto/update-app-screen-master.dto';

@Controller('app-screen-master')
export class AppScreenMasterController {
  constructor(private readonly appScreenMasterService: AppScreenMasterService) {}

  @Post()
  async create(@Body() createAppScreenMasterDto: CreateAppScreenMasterDto) {
    return await this.appScreenMasterService.create(createAppScreenMasterDto);
  }

  @Get()
  async findAll() {
    return await this.appScreenMasterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.appScreenMasterService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAppScreenMasterDto: UpdateAppScreenMasterDto) {
    return await this.appScreenMasterService.update(+id, updateAppScreenMasterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.appScreenMasterService.remove(+id);
  }
}