import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirportLocationMastersService } from './airport-location-masters.service';
import { CreateAirportLocationMasterDto } from './dto/create-airport-location-master.dto';
import { UpdateAirportLocationMasterDto } from './dto/update-airport-location-master.dto';

@Controller('airport-location-masters')
export class AirportLocationMastersController {
  constructor(private readonly airportLocationMastersService: AirportLocationMastersService) {}

  @Post()
  create(@Body() createAirportLocationMasterDto: CreateAirportLocationMasterDto) {
    return this.airportLocationMastersService.create(createAirportLocationMasterDto);
  }

  @Get()
  findAll() {
    return this.airportLocationMastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airportLocationMastersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirportLocationMasterDto: UpdateAirportLocationMasterDto) {
    return this.airportLocationMastersService.update(+id, updateAirportLocationMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airportLocationMastersService.remove(+id);
  }
}
