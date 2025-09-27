import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppLaunchinfoDto } from './dto/create-app-launchinfo.dto';
import { UpdateAppLaunchinfoDto } from './dto/update-app-launchinfo.dto';
import { AppLaunchInfo } from './entities/app-launchinfo.entity';

@Injectable()
export class AppLaunchinfoService {
  constructor(
    @InjectRepository(AppLaunchInfo)
    private readonly appLaunchinfoRepository: Repository<AppLaunchInfo>,
  ) {}

  async create(createAppLaunchinfoDto: CreateAppLaunchinfoDto): Promise<AppLaunchInfo> {
    const newAppLaunchinfo = this.appLaunchinfoRepository.create(createAppLaunchinfoDto);
    return this.appLaunchinfoRepository.save(newAppLaunchinfo);
  }

  async findAll(): Promise<AppLaunchInfo[]> {
    return this.appLaunchinfoRepository.find();
  }

  async findOne(id: number): Promise<AppLaunchInfo> {
    const appLaunchinfo = await this.appLaunchinfoRepository.findOne({ where: { iImageId: id } });
    if (!appLaunchinfo) {
      throw new NotFoundException(`App launch info with ID #${id} not found`);
    }
    return appLaunchinfo;
  }

  async update(id: number, updateAppLaunchinfoDto: UpdateAppLaunchinfoDto): Promise<AppLaunchInfo> {
    const appLaunchinfo = await this.findOne(id);
    this.appLaunchinfoRepository.merge(appLaunchinfo, updateAppLaunchinfoDto);
    return this.appLaunchinfoRepository.save(appLaunchinfo);
  }

  async remove(id: number): Promise<void> {
    const result = await this.appLaunchinfoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`App launch info with ID #${id} not found`);
    }
  }
}