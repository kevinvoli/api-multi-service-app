import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SetupInfo } from './entities/setup-info.entity';
import { CreateSetupInfoDto } from './dto/create-setup-info.dto';
import { UpdateSetupInfoDto } from './dto/update-setup-info.dto';

@Injectable()
export class SetupInfoService {
  constructor(
    @InjectRepository(SetupInfo)
    private readonly repository: Repository<SetupInfo>,
  ) {}

  async create(createDto: CreateSetupInfoDto): Promise<SetupInfo> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<SetupInfo[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<SetupInfo> {
    const entity = await this.repository.findOneBy({ iSetupId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateSetupInfoDto): Promise<SetupInfo> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
