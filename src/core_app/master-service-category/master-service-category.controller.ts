import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterServiceCategoryService } from './master-service-category.service';
import { CreateMasterServiceCategoryDto } from './dto/create-master-service-category.dto';
import { UpdateMasterServiceCategoryDto } from './dto/update-master-service-category.dto';

@Controller('master-service-category')
export class MasterServiceCategoryController {
  constructor(private readonly masterServiceCategoryService: MasterServiceCategoryService) {}

  @Post()
  create(@Body() createMasterServiceCategoryDto: CreateMasterServiceCategoryDto) {
    return this.masterServiceCategoryService.create(createMasterServiceCategoryDto);
  }

  @Get()
  findAll() {
    return this.masterServiceCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterServiceCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterServiceCategoryDto: UpdateMasterServiceCategoryDto) {
    return this.masterServiceCategoryService.update(+id, updateMasterServiceCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterServiceCategoryService.remove(+id);
  }
}
