import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguagePageDetails } from './entities/language-page-detail.entity';
import { CreateLanguagePageDetailDto } from './dto/create-language-page-detail.dto';
import { UpdateLanguagePageDetailDto } from './dto/update-language-page-detail.dto';

@Injectable()
export class LanguagePageDetailsService {
  constructor(
    @InjectRepository(LanguagePageDetails)
    private readonly repository: Repository<LanguagePageDetails>,
  ) {}

  async create(createDto: CreateLanguagePageDetailDto): Promise<LanguagePageDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LanguagePageDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LanguagePageDetails> {
    const entity = await this.repository.findOneBy({ lpId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLanguagePageDetailDto): Promise<LanguagePageDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
