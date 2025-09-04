import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripHelpDetailService } from './trip-help-detail.service';
import { CreateTripHelpDetailDto } from './dto/create-trip-help-detail.dto';
import { UpdateTripHelpDetailDto } from './dto/update-trip-help-detail.dto';

@Controller('trip-help-detail')
export class TripHelpDetailController {
  constructor(private readonly tripHelpDetailService: TripHelpDetailService) {}

  @Post()
  create(@Body() createTripHelpDetailDto: CreateTripHelpDetailDto) {
    return this.tripHelpDetailService.create(createTripHelpDetailDto);
  }

  @Get()
  findAll() {
    return this.tripHelpDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripHelpDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripHelpDetailDto: UpdateTripHelpDetailDto) {
    return this.tripHelpDetailService.update(+id, updateTripHelpDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripHelpDetailService.remove(+id);
  }
}
