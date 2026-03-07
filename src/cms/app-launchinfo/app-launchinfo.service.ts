import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppLaunchInfo } from './entities/app-launchinfo.entity';
import { CreateAppLaunchinfoDto } from './dto/create-app-launchinfo.dto';
import { UpdateAppLaunchinfoDto } from './dto/update-app-launchinfo.dto';

@Injectable()
export class AppLaunchinfoService {
  constructor(
    @InjectRepository(AppLaunchInfo)
    private readonly repository: Repository<AppLaunchInfo>,
  ) {}

  async create(createDto: CreateAppLaunchinfoDto): Promise<AppLaunchInfo> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AppLaunchInfo[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AppLaunchInfo> {
    const entity = await this.repository.findOneBy({ iImageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAppLaunchinfoDto): Promise<AppLaunchInfo> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
