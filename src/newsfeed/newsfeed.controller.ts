import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsfeedService } from './newsfeed.service';
import { CreateNewsfeedDto } from './dto/create-newsfeed.dto';
import { UpdateNewsfeedDto } from './dto/update-newsfeed.dto';

@Controller('newsfeed')
export class NewsfeedController {
  constructor(private readonly newsfeedService: NewsfeedService) {}

  @Post()
  create(@Body() createNewsfeedDto: CreateNewsfeedDto) {
    return this.newsfeedService.create(createNewsfeedDto);
  }

  @Get()
  findAll() {
    return this.newsfeedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsfeedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsfeedDto: UpdateNewsfeedDto) {
    return this.newsfeedService.update(+id, updateNewsfeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsfeedService.remove(+id);
  }
}
