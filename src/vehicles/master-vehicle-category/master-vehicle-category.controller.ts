import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';
import { CreateMasterVehicleCategoryDto } from './dto/create-master-vehicle-category.dto';
import { UpdateMasterVehicleCategoryDto } from './dto/update-master-vehicle-category.dto';

@Controller('master-vehicle-category')
export class MasterVehicleCategoryController {
  constructor(private readonly masterVehicleCategoryService: MasterVehicleCategoryService) {}

  @Post()
  async create(@Body() createMasterVehicleCategoryDto: CreateMasterVehicleCategoryDto) {
    return await this.masterVehicleCategoryService.create(createMasterVehicleCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.masterVehicleCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.masterVehicleCategoryService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMasterVehicleCategoryDto: UpdateMasterVehicleCategoryDto) {
    return await this.masterVehicleCategoryService.update(+id, updateMasterVehicleCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.masterVehicleCategoryService.remove(+id);
  }
}