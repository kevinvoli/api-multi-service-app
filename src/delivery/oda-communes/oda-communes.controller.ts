import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaCommunesService } from './oda-communes.service';
import { CreateOdaCommuneDto } from './dto/create-oda-commune.dto';
import { UpdateOdaCommuneDto } from './dto/update-oda-commune.dto';

@Controller('oda-communes')
export class OdaCommunesController {
  constructor(private readonly odaCommunesService: OdaCommunesService) {}

  @Post()
  create(@Body() createOdaCommuneDto: CreateOdaCommuneDto) {
    return this.odaCommunesService.create(createOdaCommuneDto);
  }

  @Get()
  findAll() {
    return this.odaCommunesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaCommunesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaCommuneDto: UpdateOdaCommuneDto) {
    return this.odaCommunesService.update(+id, updateOdaCommuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaCommunesService.remove(+id);
  }
}
