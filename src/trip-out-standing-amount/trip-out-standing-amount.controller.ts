import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripOutStandingAmountService } from './trip-out-standing-amount.service';
import { CreateTripOutStandingAmountDto } from './dto/create-trip-out-standing-amount.dto';
import { UpdateTripOutStandingAmountDto } from './dto/update-trip-out-standing-amount.dto';

@Controller('trip-out-standing-amount')
export class TripOutStandingAmountController {
  constructor(private readonly tripOutStandingAmountService: TripOutStandingAmountService) {}

  @Post()
  create(@Body() createTripOutStandingAmountDto: CreateTripOutStandingAmountDto) {
    return this.tripOutStandingAmountService.create(createTripOutStandingAmountDto);
  }

  @Get()
  findAll() {
    return this.tripOutStandingAmountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripOutStandingAmountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripOutStandingAmountDto: UpdateTripOutStandingAmountDto) {
    return this.tripOutStandingAmountService.update(+id, updateTripOutStandingAmountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripOutStandingAmountService.remove(+id);
  }
}
