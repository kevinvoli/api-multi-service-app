import { Injectable } from '@nestjs/common';
import { CreateHomeScreenDto } from './dto/create-home-screen.dto';
import { UpdateHomeScreenDto } from './dto/update-home-screen.dto';

@Injectable()
export class HomeScreensService {
  create(createHomeScreenDto: CreateHomeScreenDto) {
    return 'This action adds a new homeScreen';
  }

  findAll() {
    return `This action returns all homeScreens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeScreen`;
  }

  update(id: number, updateHomeScreenDto: UpdateHomeScreenDto) {
    return `This action updates a #${id} homeScreen`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeScreen`;
  }
}
