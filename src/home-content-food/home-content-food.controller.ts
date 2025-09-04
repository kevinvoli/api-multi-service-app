import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeContentFoodService } from './home-content-food.service';
import { CreateHomeContentFoodDto } from './dto/create-home-content-food.dto';
import { UpdateHomeContentFoodDto } from './dto/update-home-content-food.dto';

@Controller('home-content-food')
export class HomeContentFoodController {
  constructor(private readonly homeContentFoodService: HomeContentFoodService) {}

  @Post()
  create(@Body() createHomeContentFoodDto: CreateHomeContentFoodDto) {
    return this.homeContentFoodService.create(createHomeContentFoodDto);
  }

  @Get()
  findAll() {
    return this.homeContentFoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeContentFoodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeContentFoodDto: UpdateHomeContentFoodDto) {
    return this.homeContentFoodService.update(+id, updateHomeContentFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeContentFoodService.remove(+id);
  }
}
