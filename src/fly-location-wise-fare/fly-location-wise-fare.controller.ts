import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlyLocationWiseFareService } from './fly-location-wise-fare.service';
import { CreateFlyLocationWiseFareDto } from './dto/create-fly-location-wise-fare.dto';
import { UpdateFlyLocationWiseFareDto } from './dto/update-fly-location-wise-fare.dto';

@Controller('fly-location-wise-fare')
export class FlyLocationWiseFareController {
  constructor(private readonly flyLocationWiseFareService: FlyLocationWiseFareService) {}

  @Post()
  create(@Body() createFlyLocationWiseFareDto: CreateFlyLocationWiseFareDto) {
    return this.flyLocationWiseFareService.create(createFlyLocationWiseFareDto);
  }

  @Get()
  findAll() {
    return this.flyLocationWiseFareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flyLocationWiseFareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlyLocationWiseFareDto: UpdateFlyLocationWiseFareDto) {
    return this.flyLocationWiseFareService.update(+id, updateFlyLocationWiseFareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flyLocationWiseFareService.remove(+id);
  }
}
