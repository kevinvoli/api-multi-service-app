import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriqueCxoGrothService } from './historique-cxo-groth.service';
import { CreateHistoriqueCxoGrothDto } from './dto/create-historique-cxo-groth.dto';
import { UpdateHistoriqueCxoGrothDto } from './dto/update-historique-cxo-groth.dto';

@Controller('historique-cxo-groth')
export class HistoriqueCxoGrothController {
  constructor(private readonly historiqueCxoGrothService: HistoriqueCxoGrothService) {}

  @Post()
  create(@Body() createHistoriqueCxoGrothDto: CreateHistoriqueCxoGrothDto) {
    return this.historiqueCxoGrothService.create(createHistoriqueCxoGrothDto);
  }

  @Get()
  findAll() {
    return this.historiqueCxoGrothService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiqueCxoGrothService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoriqueCxoGrothDto: UpdateHistoriqueCxoGrothDto) {
    return this.historiqueCxoGrothService.update(+id, updateHistoriqueCxoGrothDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiqueCxoGrothService.remove(+id);
  }
}
