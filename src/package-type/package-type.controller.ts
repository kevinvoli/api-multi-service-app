import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageTypeService } from './package-type.service';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';

@Controller('package-type')
export class PackageTypeController {
  constructor(private readonly packageTypeService: PackageTypeService) {}

  @Post()
  create(@Body() createPackageTypeDto: CreatePackageTypeDto) {
    return this.packageTypeService.create(createPackageTypeDto);
  }

  @Get()
  findAll() {
    return this.packageTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackageTypeDto: UpdatePackageTypeDto) {
    return this.packageTypeService.update(+id, updatePackageTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageTypeService.remove(+id);
  }
}
