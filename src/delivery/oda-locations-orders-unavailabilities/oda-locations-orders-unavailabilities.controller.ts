import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaLocationsOrdersUnavailabilitiesService } from './oda-locations-orders-unavailabilities.service';
import { CreateOdaLocationsOrdersUnavailabilityDto } from './dto/create-oda-locations-orders-unavailability.dto';
import { UpdateOdaLocationsOrdersUnavailabilityDto } from './dto/update-oda-locations-orders-unavailability.dto';

@Controller('oda-locations-orders-unavailabilities')
export class OdaLocationsOrdersUnavailabilitiesController {
  constructor(private readonly odaLocationsOrdersUnavailabilitiesService: OdaLocationsOrdersUnavailabilitiesService) {}

  @Post()
  create(@Body() createOdaLocationsOrdersUnavailabilityDto: CreateOdaLocationsOrdersUnavailabilityDto) {
    return this.odaLocationsOrdersUnavailabilitiesService.create(createOdaLocationsOrdersUnavailabilityDto);
  }

  @Get()
  findAll() {
    return this.odaLocationsOrdersUnavailabilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaLocationsOrdersUnavailabilitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaLocationsOrdersUnavailabilityDto: UpdateOdaLocationsOrdersUnavailabilityDto) {
    return this.odaLocationsOrdersUnavailabilitiesService.update(+id, updateOdaLocationsOrdersUnavailabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaLocationsOrdersUnavailabilitiesService.remove(+id);
  }
}
