import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverPreferences } from './entities/driver-preference.entity';
import { CreateDriverPreferenceDto } from './dto/create-driver-preference.dto';
import { UpdateDriverPreferenceDto } from './dto/update-driver-preference.dto';

@Injectable()
export class DriverPreferencesService {
  constructor(
    @InjectRepository(DriverPreferences)
    private readonly repository: Repository<DriverPreferences>,
  ) {}

  async create(createDto: CreateDriverPreferenceDto): Promise<DriverPreferences> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverPreferences[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverPreferences> {
    const entity = await this.repository.findOneBy({ iDriverPreferenceId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverPreferenceDto): Promise<DriverPreferences> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
