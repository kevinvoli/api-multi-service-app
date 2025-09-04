import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';
import { CreatePlanPurchaseMasterDto } from './dto/create-plan-purchase-master.dto';
import { UpdatePlanPurchaseMasterDto } from './dto/update-plan-purchase-master.dto';

@Controller('plan-purchase-master')
export class PlanPurchaseMasterController {
  constructor(private readonly planPurchaseMasterService: PlanPurchaseMasterService) {}

  @Post()
  create(@Body() createPlanPurchaseMasterDto: CreatePlanPurchaseMasterDto) {
    return this.planPurchaseMasterService.create(createPlanPurchaseMasterDto);
  }

  @Get()
  findAll() {
    return this.planPurchaseMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planPurchaseMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanPurchaseMasterDto: UpdatePlanPurchaseMasterDto) {
    return this.planPurchaseMasterService.update(+id, updatePlanPurchaseMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planPurchaseMasterService.remove(+id);
  }
}
