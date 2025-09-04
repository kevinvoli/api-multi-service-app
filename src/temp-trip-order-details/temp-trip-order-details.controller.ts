import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TempTripOrderDetailsService } from './temp-trip-order-details.service';
import { CreateTempTripOrderDetailDto } from './dto/create-temp-trip-order-detail.dto';
import { UpdateTempTripOrderDetailDto } from './dto/update-temp-trip-order-detail.dto';

@Controller('temp-trip-order-details')
export class TempTripOrderDetailsController {
  constructor(private readonly tempTripOrderDetailsService: TempTripOrderDetailsService) {}

  @Post()
  create(@Body() createTempTripOrderDetailDto: CreateTempTripOrderDetailDto) {
    return this.tempTripOrderDetailsService.create(createTempTripOrderDetailDto);
  }

  @Get()
  findAll() {
    return this.tempTripOrderDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tempTripOrderDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTempTripOrderDetailDto: UpdateTempTripOrderDetailDto) {
    return this.tempTripOrderDetailsService.update(+id, updateTempTripOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tempTripOrderDetailsService.remove(+id);
  }
}
