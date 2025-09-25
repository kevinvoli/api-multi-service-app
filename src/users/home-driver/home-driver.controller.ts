import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeDriverService } from './home-driver.service';
import { CreateHomeDriverDto } from './dto/create-home-driver.dto';
import { UpdateHomeDriverDto } from './dto/update-home-driver.dto';

@Controller('home-driver')
export class HomeDriverController {
  constructor(private readonly homeDriverService: HomeDriverService) {}

  @Post()
  create(@Body() createHomeDriverDto: CreateHomeDriverDto) {
    return this.homeDriverService.create(createHomeDriverDto);
  }

  @Get()
  findAll() {
    return this.homeDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeDriverDto: UpdateHomeDriverDto) {
    return this.homeDriverService.update(+id, updateHomeDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeDriverService.remove(+id);
  }
}
