import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';
import { CreateOdaSousServicesLocationDto } from './dto/create-oda-sous-services-location.dto';
import { UpdateOdaSousServicesLocationDto } from './dto/update-oda-sous-services-location.dto';

@Controller('oda-sous-services-location')
export class OdaSousServicesLocationController {
  constructor(private readonly odaSousServicesLocationService: OdaSousServicesLocationService) {}

  @Post()
  create(@Body() createOdaSousServicesLocationDto: CreateOdaSousServicesLocationDto) {
    return this.odaSousServicesLocationService.create(createOdaSousServicesLocationDto);
  }

  @Get()
  findAll() {
    return this.odaSousServicesLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odaSousServicesLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdaSousServicesLocationDto: UpdateOdaSousServicesLocationDto) {
    return this.odaSousServicesLocationService.update(+id, updateOdaSousServicesLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odaSousServicesLocationService.remove(+id);
  }
}
