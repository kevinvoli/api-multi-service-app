import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';
import { CreateMasterVehicleCategoryDto } from './dto/create-master-vehicle-category.dto';
import { UpdateMasterVehicleCategoryDto } from './dto/update-master-vehicle-category.dto';

@Controller('master-vehicle-category')
export class MasterVehicleCategoryController {
  constructor(private readonly masterVehicleCategoryService: MasterVehicleCategoryService) {}

  @Post()
  create(@Body() createMasterVehicleCategoryDto: CreateMasterVehicleCategoryDto) {
    return this.masterVehicleCategoryService.create(createMasterVehicleCategoryDto);
  }

  @Get()
  findAll() {
    return this.masterVehicleCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterVehicleCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterVehicleCategoryDto: UpdateMasterVehicleCategoryDto) {
    return this.masterVehicleCategoryService.update(+id, updateMasterVehicleCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterVehicleCategoryService.remove(+id);
  }
}
