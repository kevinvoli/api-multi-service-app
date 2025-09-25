import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodMenuImagesService } from './food-menu-images.service';
import { CreateFoodMenuImageDto } from './dto/create-food-menu-image.dto';
import { UpdateFoodMenuImageDto } from './dto/update-food-menu-image.dto';

@Controller('food-menu-images')
export class FoodMenuImagesController {
  constructor(private readonly foodMenuImagesService: FoodMenuImagesService) {}

  @Post()
  create(@Body() createFoodMenuImageDto: CreateFoodMenuImageDto) {
    return this.foodMenuImagesService.create(createFoodMenuImageDto);
  }

  @Get()
  findAll() {
    return this.foodMenuImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodMenuImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodMenuImageDto: UpdateFoodMenuImageDto) {
    return this.foodMenuImagesService.update(+id, updateFoodMenuImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodMenuImagesService.remove(+id);
  }
}
