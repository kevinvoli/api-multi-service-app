import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripReasonService } from './trip-reason.service';
import { CreateTripReasonDto } from './dto/create-trip-reason.dto';
import { UpdateTripReasonDto } from './dto/update-trip-reason.dto';

@Controller('trip-reason')
export class TripReasonController {
  constructor(private readonly tripReasonService: TripReasonService) {}

  @Post()
  create(@Body() createTripReasonDto: CreateTripReasonDto) {
    return this.tripReasonService.create(createTripReasonDto);
  }

  @Get()
  findAll() {
    return this.tripReasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripReasonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripReasonDto: UpdateTripReasonDto) {
    return this.tripReasonService.update(+id, updateTripReasonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripReasonService.remove(+id);
  }
}
