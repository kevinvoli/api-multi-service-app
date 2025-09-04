import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripOderDetailsService } from './trip-oder-details.service';
import { CreateTripOderDetailDto } from './dto/create-trip-oder-detail.dto';
import { UpdateTripOderDetailDto } from './dto/update-trip-oder-detail.dto';

@Controller('trip-oder-details')
export class TripOderDetailsController {
  constructor(private readonly tripOderDetailsService: TripOderDetailsService) {}

  @Post()
  create(@Body() createTripOderDetailDto: CreateTripOderDetailDto) {
    return this.tripOderDetailsService.create(createTripOderDetailDto);
  }

  @Get()
  findAll() {
    return this.tripOderDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripOderDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripOderDetailDto: UpdateTripOderDetailDto) {
    return this.tripOderDetailsService.update(+id, updateTripOderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripOderDetailsService.remove(+id);
  }
}
