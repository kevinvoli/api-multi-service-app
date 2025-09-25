import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationWiseFareService } from './location-wise-fare.service';
import { CreateLocationWiseFareDto } from './dto/create-location-wise-fare.dto';
import { UpdateLocationWiseFareDto } from './dto/update-location-wise-fare.dto';

@Controller('location-wise-fare')
export class LocationWiseFareController {
  constructor(private readonly locationWiseFareService: LocationWiseFareService) {}

  @Post()
  create(@Body() createLocationWiseFareDto: CreateLocationWiseFareDto) {
    return this.locationWiseFareService.create(createLocationWiseFareDto);
  }

  @Get()
  findAll() {
    return this.locationWiseFareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationWiseFareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationWiseFareDto: UpdateLocationWiseFareDto) {
    return this.locationWiseFareService.update(+id, updateLocationWiseFareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationWiseFareService.remove(+id);
  }
}
