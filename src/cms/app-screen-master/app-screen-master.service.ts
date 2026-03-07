import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppScreenMaster } from './entities/app-screen-master.entity';
import { CreateAppScreenMasterDto } from './dto/create-app-screen-master.dto';
import { UpdateAppScreenMasterDto } from './dto/update-app-screen-master.dto';

@Injectable()
export class AppScreenMasterService {
  constructor(
    @InjectRepository(AppScreenMaster)
    private readonly repository: Repository<AppScreenMaster>,
  ) {}

  async create(createDto: CreateAppScreenMasterDto): Promise<AppScreenMaster> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AppScreenMaster[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AppScreenMaster> {
    const entity = await this.repository.findOneBy({ lPageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAppScreenMasterDto): Promise<AppScreenMaster> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
