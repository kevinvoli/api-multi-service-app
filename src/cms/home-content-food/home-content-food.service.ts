import { Injectable } from '@nestjs/common';
import { CreateHomeContentFoodDto } from './dto/create-home-content-food.dto';
import { UpdateHomeContentFoodDto } from './dto/update-home-content-food.dto';

@Injectable()
export class HomeContentFoodService {
  create(createHomeContentFoodDto: CreateHomeContentFoodDto) {
    return 'This action adds a new homeContentFood';
  }

  findAll() {
    return `This action returns all homeContentFood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeContentFood`;
  }

  update(id: number, updateHomeContentFoodDto: UpdateHomeContentFoodDto) {
    return `This action updates a #${id} homeContentFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeContentFood`;
  }
}
