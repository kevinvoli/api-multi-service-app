import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppLaunchinfoService } from './app-launchinfo.service';
import { CreateAppLaunchinfoDto } from './dto/create-app-launchinfo.dto';
import { UpdateAppLaunchinfoDto } from './dto/update-app-launchinfo.dto';

@Controller('app-launchinfo')
export class AppLaunchinfoController {
  constructor(private readonly appLaunchinfoService: AppLaunchinfoService) {}

  @Post()
  async create(@Body() createAppLaunchinfoDto: CreateAppLaunchinfoDto) {
    return await this.appLaunchinfoService.create(createAppLaunchinfoDto);
  }

  @Get()
  async findAll() {
    return await this.appLaunchinfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.appLaunchinfoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAppLaunchinfoDto: UpdateAppLaunchinfoDto) {
    return await this.appLaunchinfoService.update(+id, updateAppLaunchinfoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.appLaunchinfoService.remove(+id);
  }
}