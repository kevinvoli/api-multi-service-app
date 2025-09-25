import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CabBookingService } from './cab-booking.service';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';

@Controller('cab-booking')
export class CabBookingController {
  constructor(private readonly cabBookingService: CabBookingService) {}

  @Post()
  create(@Body() createCabBookingDto: CreateCabBookingDto) {
    return this.cabBookingService.create(createCabBookingDto);
  }

  @Get()
  findAll() {
    return this.cabBookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cabBookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCabBookingDto: UpdateCabBookingDto) {
    return this.cabBookingService.update(+id, updateCabBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cabBookingService.remove(+id);
  }
}
