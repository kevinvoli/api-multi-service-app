import { Injectable } from '@nestjs/common';
import { CreateFoodMenuImageDto } from './dto/create-food-menu-image.dto';
import { UpdateFoodMenuImageDto } from './dto/update-food-menu-image.dto';

@Injectable()
export class FoodMenuImagesService {
  create(createFoodMenuImageDto: CreateFoodMenuImageDto) {
    return 'This action adds a new foodMenuImage';
  }

  findAll() {
    return `This action returns all foodMenuImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodMenuImage`;
  }

  update(id: number, updateFoodMenuImageDto: UpdateFoodMenuImageDto) {
    return `This action updates a #${id} foodMenuImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodMenuImage`;
  }
}
