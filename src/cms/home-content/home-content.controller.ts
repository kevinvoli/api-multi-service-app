import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeContentService } from './home-content.service';
import { CreateHomeContentDto } from './dto/create-home-content.dto';
import { UpdateHomeContentDto } from './dto/update-home-content.dto';

@Controller('home-content')
export class HomeContentController {
  constructor(private readonly homeContentService: HomeContentService) {}

  @Post()
  create(@Body() createHomeContentDto: CreateHomeContentDto) {
    return this.homeContentService.create(createHomeContentDto);
  }

  @Get()
  findAll() {
    return this.homeContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeContentDto: UpdateHomeContentDto) {
    return this.homeContentService.update(+id, updateHomeContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeContentService.remove(+id);
  }
}
