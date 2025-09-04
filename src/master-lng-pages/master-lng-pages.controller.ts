import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterLngPagesService } from './master-lng-pages.service';
import { CreateMasterLngPageDto } from './dto/create-master-lng-page.dto';
import { UpdateMasterLngPageDto } from './dto/update-master-lng-page.dto';

@Controller('master-lng-pages')
export class MasterLngPagesController {
  constructor(private readonly masterLngPagesService: MasterLngPagesService) {}

  @Post()
  create(@Body() createMasterLngPageDto: CreateMasterLngPageDto) {
    return this.masterLngPagesService.create(createMasterLngPageDto);
  }

  @Get()
  findAll() {
    return this.masterLngPagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterLngPagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterLngPageDto: UpdateMasterLngPageDto) {
    return this.masterLngPagesService.update(+id, updateMasterLngPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterLngPagesService.remove(+id);
  }
}
