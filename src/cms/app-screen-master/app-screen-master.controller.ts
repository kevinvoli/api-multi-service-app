import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppScreenMasterService } from './app-screen-master.service';
import { CreateAppScreenMasterDto } from './dto/create-app-screen-master.dto';
import { UpdateAppScreenMasterDto } from './dto/update-app-screen-master.dto';

@Controller('app-screen-master')
export class AppScreenMasterController {
  constructor(private readonly appScreenMasterService: AppScreenMasterService) {}

  @Post()
  create(@Body() createAppScreenMasterDto: CreateAppScreenMasterDto) {
    return this.appScreenMasterService.create(createAppScreenMasterDto);
  }

  @Get()
  findAll() {
    return this.appScreenMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appScreenMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppScreenMasterDto: UpdateAppScreenMasterDto) {
    return this.appScreenMasterService.update(+id, updateAppScreenMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appScreenMasterService.remove(+id);
  }
}
