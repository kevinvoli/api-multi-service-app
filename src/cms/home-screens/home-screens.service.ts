import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHomeScreenDto } from './dto/create-home-screen.dto';
import { UpdateHomeScreenDto } from './dto/update-home-screen.dto';
import { HomeScreens } from './entities/home-screen.entity';

@Injectable()
export class HomeScreensService {
  constructor(
    @InjectRepository(HomeScreens)
    private readonly homeScreensRepository: Repository<HomeScreens>,
  ) {}

  async create(createHomeScreenDto: CreateHomeScreenDto): Promise<HomeScreens> {
    const newScreen = this.homeScreensRepository.create(createHomeScreenDto);
    return this.homeScreensRepository.save(newScreen);
  }

  async findAll(): Promise<HomeScreens[]> {
    return this.homeScreensRepository.find();
  }

  async findOne(id: number): Promise<HomeScreens> {
    const screen = await this.homeScreensRepository.findOne({ where: { iId: id } });
    if (!screen) {
      throw new NotFoundException(`Home screen with ID #${id} not found`);
    }
    return screen;
  }

  async update(id: number, updateHomeScreenDto: UpdateHomeScreenDto): Promise<HomeScreens> {
    const screen = await this.findOne(id);
    this.homeScreensRepository.merge(screen, updateHomeScreenDto);
    return this.homeScreensRepository.save(screen);
  }

  async remove(id: number): Promise<void> {
    const result = await this.homeScreensRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Home screen with ID #${id} not found`);
    }
  }
}