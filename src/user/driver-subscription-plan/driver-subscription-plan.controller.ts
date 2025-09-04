import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverSubscriptionPlanService } from './driver-subscription-plan.service';
import { CreateDriverSubscriptionPlanDto } from './dto/create-driver-subscription-plan.dto';
import { UpdateDriverSubscriptionPlanDto } from './dto/update-driver-subscription-plan.dto';

@Controller('driver-subscription-plan')
export class DriverSubscriptionPlanController {
  constructor(private readonly driverSubscriptionPlanService: DriverSubscriptionPlanService) {}

  @Post()
  create(@Body() createDriverSubscriptionPlanDto: CreateDriverSubscriptionPlanDto) {
    return this.driverSubscriptionPlanService.create(createDriverSubscriptionPlanDto);
  }

  @Get()
  findAll() {
    return this.driverSubscriptionPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverSubscriptionPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverSubscriptionPlanDto: UpdateDriverSubscriptionPlanDto) {
    return this.driverSubscriptionPlanService.update(+id, updateDriverSubscriptionPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverSubscriptionPlanService.remove(+id);
  }
}
