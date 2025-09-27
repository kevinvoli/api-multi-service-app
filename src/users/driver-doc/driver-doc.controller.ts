import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverDocService } from './driver-doc.service';
import { CreateDriverDocDto } from './dto/create-driver-doc.dto';
import { UpdateDriverDocDto } from './dto/update-driver-doc.dto';

@Controller('driver-doc')
export class DriverDocController {
  constructor(private readonly driverDocService: DriverDocService) {}

  @Post()
  async create(@Body() createDriverDocDto: CreateDriverDocDto) {
    return await this.driverDocService.create(createDriverDocDto);
  }

  @Get()
  async findAll() {
    return await this.driverDocService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.driverDocService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDriverDocDto: UpdateDriverDocDto) {
    return await this.driverDocService.update(+id, updateDriverDocDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.driverDocService.remove(+id);
  }
}
