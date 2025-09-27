import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeScreensService } from './home-screens.service';
import { CreateHomeScreenDto } from './dto/create-home-screen.dto';
import { UpdateHomeScreenDto } from './dto/update-home-screen.dto';

@Controller('home-screens')
export class HomeScreensController {
  constructor(private readonly homeScreensService: HomeScreensService) {}

  @Post()
  async create(@Body() createHomeScreenDto: CreateHomeScreenDto) {
    return await this.homeScreensService.create(createHomeScreenDto);
  }

  @Get()
  async findAll() {
    return await this.homeScreensService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.homeScreensService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHomeScreenDto: UpdateHomeScreenDto) {
    return await this.homeScreensService.update(+id, updateHomeScreenDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.homeScreensService.remove(+id);
  }
}