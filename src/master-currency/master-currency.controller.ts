import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterCurrencyService } from './master-currency.service';
import { CreateMasterCurrencyDto } from './dto/create-master-currency.dto';
import { UpdateMasterCurrencyDto } from './dto/update-master-currency.dto';

@Controller('master-currency')
export class MasterCurrencyController {
  constructor(private readonly masterCurrencyService: MasterCurrencyService) {}

  @Post()
  create(@Body() createMasterCurrencyDto: CreateMasterCurrencyDto) {
    return this.masterCurrencyService.create(createMasterCurrencyDto);
  }

  @Get()
  findAll() {
    return this.masterCurrencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterCurrencyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterCurrencyDto: UpdateMasterCurrencyDto) {
    return this.masterCurrencyService.update(+id, updateMasterCurrencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterCurrencyService.remove(+id);
  }
}
