import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverDocService } from './driver-doc.service';
import { CreateDriverDocDto } from './dto/create-driver-doc.dto';
import { UpdateDriverDocDto } from './dto/update-driver-doc.dto';

@Controller('driver-doc')
export class DriverDocController {
  constructor(private readonly driverDocService: DriverDocService) {}

  @Post()
  create(@Body() createDriverDocDto: CreateDriverDocDto) {
    return this.driverDocService.create(createDriverDocDto);
  }

  @Get()
  findAll() {
    return this.driverDocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverDocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDocDto: UpdateDriverDocDto) {
    return this.driverDocService.update(+id, updateDriverDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverDocService.remove(+id);
  }
}
