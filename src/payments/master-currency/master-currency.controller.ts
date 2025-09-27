import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MasterCurrencyService } from './master-currency.service';
import { CreateMasterCurrencyDto } from './dto/create-master-currency.dto';
import { UpdateMasterCurrencyDto } from './dto/update-master-currency.dto';
import { MasterCurrency } from './entities/master-currency.entity';

@Controller('master-currency')
export class MasterCurrencyController {
  constructor(private readonly masterCurrencyService: MasterCurrencyService) {}

  @Post()
  async create(@Body() createMasterCurrencyDto: CreateMasterCurrencyDto): Promise<MasterCurrency> {
    return this.masterCurrencyService.create(createMasterCurrencyDto);
  }

  @Get()
  async findAll(): Promise<MasterCurrency[]> {
    return this.masterCurrencyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<MasterCurrency> {
    return this.masterCurrencyService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateMasterCurrencyDto: UpdateMasterCurrencyDto): Promise<MasterCurrency> {
    return this.masterCurrencyService.update(id, updateMasterCurrencyDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.masterCurrencyService.remove(id);
  }
}