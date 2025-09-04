import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverRequestService } from './driver-request.service';
import { CreateDriverRequestDto } from './dto/create-driver-request.dto';
import { UpdateDriverRequestDto } from './dto/update-driver-request.dto';

@Controller('driver-request')
export class DriverRequestController {
  constructor(private readonly driverRequestService: DriverRequestService) {}

  @Post()
  create(@Body() createDriverRequestDto: CreateDriverRequestDto) {
    return this.driverRequestService.create(createDriverRequestDto);
  }

  @Get()
  findAll() {
    return this.driverRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverRequestDto: UpdateDriverRequestDto) {
    return this.driverRequestService.update(+id, updateDriverRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverRequestService.remove(+id);
  }
}
