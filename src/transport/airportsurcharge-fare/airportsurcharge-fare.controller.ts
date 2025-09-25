import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirportsurchargeFareService } from './airportsurcharge-fare.service';
import { CreateAirportsurchargeFareDto } from './dto/create-airportsurcharge-fare.dto';
import { UpdateAirportsurchargeFareDto } from './dto/update-airportsurcharge-fare.dto';

@Controller('airportsurcharge-fare')
export class AirportsurchargeFareController {
  constructor(private readonly airportsurchargeFareService: AirportsurchargeFareService) {}

  @Post()
  create(@Body() createAirportsurchargeFareDto: CreateAirportsurchargeFareDto) {
    return this.airportsurchargeFareService.create(createAirportsurchargeFareDto);
  }

  @Get()
  findAll() {
    return this.airportsurchargeFareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airportsurchargeFareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirportsurchargeFareDto: UpdateAirportsurchargeFareDto) {
    return this.airportsurchargeFareService.update(+id, updateAirportsurchargeFareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airportsurchargeFareService.remove(+id);
  }
}
