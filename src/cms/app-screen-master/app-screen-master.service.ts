import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppScreenMasterDto } from './dto/create-app-screen-master.dto';
import { UpdateAppScreenMasterDto } from './dto/update-app-screen-master.dto';
import { AppScreenMaster } from './entities/app-screen-master.entity';

@Injectable()
export class AppScreenMasterService {
  constructor(
    @InjectRepository(AppScreenMaster)
    private readonly appScreenMasterRepository: Repository<AppScreenMaster>,
  ) {}

  async create(createAppScreenMasterDto: CreateAppScreenMasterDto): Promise<AppScreenMaster> {
    const newScreen = this.appScreenMasterRepository.create(createAppScreenMasterDto);
    return this.appScreenMasterRepository.save(newScreen);
  }

  async findAll(): Promise<AppScreenMaster[]> {
    return this.appScreenMasterRepository.find();
  }

  async findOne(id: number): Promise<AppScreenMaster> {
    const screen = await this.appScreenMasterRepository.findOne({ where: { lPageId: id } });
    if (!screen) {
      throw new NotFoundException(`App Screen with ID #${id} not found`);
    }
    return screen;
  }

  async update(id: number, updateAppScreenMasterDto: UpdateAppScreenMasterDto): Promise<AppScreenMaster> {
    const screen = await this.findOne(id);
    this.appScreenMasterRepository.merge(screen, updateAppScreenMasterDto);
    return this.appScreenMasterRepository.save(screen);
  }

  async remove(id: number): Promise<void> {
    const result = await this.appScreenMasterRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`App Screen with ID #${id} not found`);
    }
  }
}