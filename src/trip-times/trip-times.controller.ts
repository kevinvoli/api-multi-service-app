import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripTimesService } from './trip-times.service';
import { CreateTripTimeDto } from './dto/create-trip-time.dto';
import { UpdateTripTimeDto } from './dto/update-trip-time.dto';

@Controller('trip-times')
export class TripTimesController {
  constructor(private readonly tripTimesService: TripTimesService) {}

  @Post()
  create(@Body() createTripTimeDto: CreateTripTimeDto) {
    return this.tripTimesService.create(createTripTimeDto);
  }

  @Get()
  findAll() {
    return this.tripTimesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripTimesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripTimeDto: UpdateTripTimeDto) {
    return this.tripTimesService.update(+id, updateTripTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripTimesService.remove(+id);
  }
}
