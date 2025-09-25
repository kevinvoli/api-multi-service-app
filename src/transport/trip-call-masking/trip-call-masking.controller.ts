import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripCallMaskingService } from './trip-call-masking.service';
import { CreateTripCallMaskingDto } from './dto/create-trip-call-masking.dto';
import { UpdateTripCallMaskingDto } from './dto/update-trip-call-masking.dto';

@Controller('trip-call-masking')
export class TripCallMaskingController {
  constructor(private readonly tripCallMaskingService: TripCallMaskingService) {}

  @Post()
  create(@Body() createTripCallMaskingDto: CreateTripCallMaskingDto) {
    return this.tripCallMaskingService.create(createTripCallMaskingDto);
  }

  @Get()
  findAll() {
    return this.tripCallMaskingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripCallMaskingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripCallMaskingDto: UpdateTripCallMaskingDto) {
    return this.tripCallMaskingService.update(+id, updateTripCallMaskingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripCallMaskingService.remove(+id);
  }
}
