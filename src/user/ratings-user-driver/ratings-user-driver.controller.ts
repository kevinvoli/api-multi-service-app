import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatingsUserDriverService } from './ratings-user-driver.service';
import { CreateRatingsUserDriverDto } from './dto/create-ratings-user-driver.dto';
import { UpdateRatingsUserDriverDto } from './dto/update-ratings-user-driver.dto';

@Controller('ratings-user-driver')
export class RatingsUserDriverController {
  constructor(private readonly ratingsUserDriverService: RatingsUserDriverService) {}

  @Post()
  create(@Body() createRatingsUserDriverDto: CreateRatingsUserDriverDto) {
    return this.ratingsUserDriverService.create(createRatingsUserDriverDto);
  }

  @Get()
  findAll() {
    return this.ratingsUserDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingsUserDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatingsUserDriverDto: UpdateRatingsUserDriverDto) {
    return this.ratingsUserDriverService.update(+id, updateRatingsUserDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingsUserDriverService.remove(+id);
  }
}
