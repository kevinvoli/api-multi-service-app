import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllDatabaseDetails } from './entities/all-database-detail.entity';
import { CreateAllDatabaseDetailDto } from './dto/create-all-database-detail.dto';
import { UpdateAllDatabaseDetailDto } from './dto/update-all-database-detail.dto';

@Injectable()
export class AllDatabaseDetailsService {
  constructor(
    @InjectRepository(AllDatabaseDetails)
    private readonly repository: Repository<AllDatabaseDetails>,
  ) {}

  async create(createDto: CreateAllDatabaseDetailDto): Promise<AllDatabaseDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AllDatabaseDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AllDatabaseDetails> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAllDatabaseDetailDto): Promise<AllDatabaseDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
