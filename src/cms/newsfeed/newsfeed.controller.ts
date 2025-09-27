import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsfeedService } from './newsfeed.service';
import { CreateNewsfeedDto } from './dto/create-newsfeed.dto';
import { UpdateNewsfeedDto } from './dto/update-newsfeed.dto';

@Controller('newsfeed')
export class NewsfeedController {
  constructor(private readonly newsfeedService: NewsfeedService) {}

  @Post()
  async create(@Body() createNewsfeedDto: CreateNewsfeedDto) {
    return await this.newsfeedService.create(createNewsfeedDto);
  }

  @Get()
  async findAll() {
    return await this.newsfeedService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.newsfeedService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNewsfeedDto: UpdateNewsfeedDto) {
    return await this.newsfeedService.update(+id, updateNewsfeedDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.newsfeedService.remove(+id);
  }
}