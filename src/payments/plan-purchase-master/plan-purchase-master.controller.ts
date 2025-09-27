import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';
import { CreatePlanPurchaseMasterDto } from './dto/create-plan-purchase-master.dto';
import { UpdatePlanPurchaseMasterDto } from './dto/update-plan-purchase-master.dto';
import { PlanPurchaseMaster } from './entities/plan-purchase-master.entity';

@Controller('plan-purchase-master')
export class PlanPurchaseMasterController {
  constructor(private readonly planPurchaseMasterService: PlanPurchaseMasterService) {}

  @Post()
  async create(@Body() createPlanPurchaseMasterDto: CreatePlanPurchaseMasterDto): Promise<PlanPurchaseMaster> {
    return this.planPurchaseMasterService.create(createPlanPurchaseMasterDto);
  }

  @Get()
  async findAll(): Promise<PlanPurchaseMaster[]> {
    return this.planPurchaseMasterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PlanPurchaseMaster> {
    return this.planPurchaseMasterService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePlanPurchaseMasterDto: UpdatePlanPurchaseMasterDto): Promise<PlanPurchaseMaster> {
    return this.planPurchaseMasterService.update(id, updatePlanPurchaseMasterDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.planPurchaseMasterService.remove(id);
  }
}