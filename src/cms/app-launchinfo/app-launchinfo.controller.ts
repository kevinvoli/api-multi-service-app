import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppLaunchinfoService } from './app-launchinfo.service';
import { CreateAppLaunchinfoDto } from './dto/create-app-launchinfo.dto';
import { UpdateAppLaunchinfoDto } from './dto/update-app-launchinfo.dto';

@Controller('app-launchinfo')
export class AppLaunchinfoController {
  constructor(private readonly appLaunchinfoService: AppLaunchinfoService) {}

  @Post()
  create(@Body() createAppLaunchinfoDto: CreateAppLaunchinfoDto) {
    return this.appLaunchinfoService.create(createAppLaunchinfoDto);
  }

  @Get()
  findAll() {
    return this.appLaunchinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appLaunchinfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppLaunchinfoDto: UpdateAppLaunchinfoDto) {
    return this.appLaunchinfoService.update(+id, updateAppLaunchinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appLaunchinfoService.remove(+id);
  }
}
