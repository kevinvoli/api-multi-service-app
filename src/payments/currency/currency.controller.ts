import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './entities/currency.entity';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()
  async create(@Body() createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
    return this.currencyService.create(createCurrencyDto);
  }

  @Get()
  async findAll(): Promise<Currency[]> {
    return this.currencyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Currency> {
    return this.currencyService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCurrencyDto: UpdateCurrencyDto): Promise<Currency> {
    return this.currencyService.update(id, updateCurrencyDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.currencyService.remove(id);
  }
}