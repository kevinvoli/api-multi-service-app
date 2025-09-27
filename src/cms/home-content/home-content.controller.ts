import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeContentService } from './home-content.service';
import { CreateHomeContentDto } from './dto/create-home-content.dto';
import { UpdateHomeContentDto } from './dto/update-home-content.dto';

@Controller('home-content')
export class HomeContentController {
  constructor(private readonly homeContentService: HomeContentService) {}

  @Post()
  async create(@Body() createHomeContentDto: CreateHomeContentDto) {
    return await this.homeContentService.create(createHomeContentDto);
  }

  @Get()
  async findAll() {
    return await this.homeContentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.homeContentService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHomeContentDto: UpdateHomeContentDto) {
    return await this.homeContentService.update(+id, updateHomeContentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.homeContentService.remove(+id);
  }
}