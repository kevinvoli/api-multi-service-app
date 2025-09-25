import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SetupInfoService } from './setup-info.service';
import { CreateSetupInfoDto } from './dto/create-setup-info.dto';
import { UpdateSetupInfoDto } from './dto/update-setup-info.dto';

@Controller('setup-info')
export class SetupInfoController {
  constructor(private readonly setupInfoService: SetupInfoService) {}

  @Post()
  create(@Body() createSetupInfoDto: CreateSetupInfoDto) {
    return this.setupInfoService.create(createSetupInfoDto);
  }

  @Get()
  findAll() {
    return this.setupInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setupInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetupInfoDto: UpdateSetupInfoDto) {
    return this.setupInfoService.update(+id, updateSetupInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setupInfoService.remove(+id);
  }
}
