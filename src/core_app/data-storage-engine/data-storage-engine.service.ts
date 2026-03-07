import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataStorageEngine } from './entities/data-storage-engine.entity';
import { CreateDataStorageEngineDto } from './dto/create-data-storage-engine.dto';
import { UpdateDataStorageEngineDto } from './dto/update-data-storage-engine.dto';

@Injectable()
export class DataStorageEngineService {
  constructor(
    @InjectRepository(DataStorageEngine)
    private readonly repository: Repository<DataStorageEngine>,
  ) {}

  async create(createDto: CreateDataStorageEngineDto): Promise<DataStorageEngine> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DataStorageEngine[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DataStorageEngine> {
    const entity = await this.repository.findOneBy({ iEngineId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDataStorageEngineDto): Promise<DataStorageEngine> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
