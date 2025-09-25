import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverSubscriptionDetailsService } from './driver-subscription-details.service';
import { CreateDriverSubscriptionDetailDto } from './dto/create-driver-subscription-detail.dto';
import { UpdateDriverSubscriptionDetailDto } from './dto/update-driver-subscription-detail.dto';

@Controller('driver-subscription-details')
export class DriverSubscriptionDetailsController {
  constructor(private readonly driverSubscriptionDetailsService: DriverSubscriptionDetailsService) {}

  @Post()
  create(@Body() createDriverSubscriptionDetailDto: CreateDriverSubscriptionDetailDto) {
    return this.driverSubscriptionDetailsService.create(createDriverSubscriptionDetailDto);
  }

  @Get()
  findAll() {
    return this.driverSubscriptionDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverSubscriptionDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverSubscriptionDetailDto: UpdateDriverSubscriptionDetailDto) {
    return this.driverSubscriptionDetailsService.update(+id, updateDriverSubscriptionDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverSubscriptionDetailsService.remove(+id);
  }
}
