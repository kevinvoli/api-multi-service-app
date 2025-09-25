import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterServiceMenuService } from './master-service-menu.service';
import { CreateMasterServiceMenuDto } from './dto/create-master-service-menu.dto';
import { UpdateMasterServiceMenuDto } from './dto/update-master-service-menu.dto';

@Controller('master-service-menu')
export class MasterServiceMenuController {
  constructor(private readonly masterServiceMenuService: MasterServiceMenuService) {}

  @Post()
  create(@Body() createMasterServiceMenuDto: CreateMasterServiceMenuDto) {
    return this.masterServiceMenuService.create(createMasterServiceMenuDto);
  }

  @Get()
  findAll() {
    return this.masterServiceMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterServiceMenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterServiceMenuDto: UpdateMasterServiceMenuDto) {
    return this.masterServiceMenuService.update(+id, updateMasterServiceMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterServiceMenuService.remove(+id);
  }
}
