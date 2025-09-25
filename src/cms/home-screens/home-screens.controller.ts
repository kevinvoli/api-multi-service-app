import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeScreensService } from './home-screens.service';
import { CreateHomeScreenDto } from './dto/create-home-screen.dto';
import { UpdateHomeScreenDto } from './dto/update-home-screen.dto';

@Controller('home-screens')
export class HomeScreensController {
  constructor(private readonly homeScreensService: HomeScreensService) {}

  @Post()
  create(@Body() createHomeScreenDto: CreateHomeScreenDto) {
    return this.homeScreensService.create(createHomeScreenDto);
  }

  @Get()
  findAll() {
    return this.homeScreensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeScreensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeScreenDto: UpdateHomeScreenDto) {
    return this.homeScreensService.update(+id, updateHomeScreenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeScreensService.remove(+id);
  }
}
