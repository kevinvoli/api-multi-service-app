import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageMaster } from './entities/language-master.entity';
import { CreateLanguageMasterDto } from './dto/create-language-master.dto';
import { UpdateLanguageMasterDto } from './dto/update-language-master.dto';

@Injectable()
export class LanguageMasterService {
  constructor(
    @InjectRepository(LanguageMaster)
    private readonly repository: Repository<LanguageMaster>,
  ) {}

  async create(createDto: CreateLanguageMasterDto): Promise<LanguageMaster> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LanguageMaster[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LanguageMaster> {
    const entity = await this.repository.findOneBy({ iLanguageMasId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLanguageMasterDto): Promise<LanguageMaster> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
