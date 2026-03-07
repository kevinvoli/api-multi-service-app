import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentCubexDetails } from './entities/content-cubex-detail.entity';
import { CreateContentCubexDetailDto } from './dto/create-content-cubex-detail.dto';
import { UpdateContentCubexDetailDto } from './dto/update-content-cubex-detail.dto';

@Injectable()
export class ContentCubexDetailsService {
  constructor(
    @InjectRepository(ContentCubexDetails)
    private readonly repository: Repository<ContentCubexDetails>,
  ) {}

  async create(createDto: CreateContentCubexDetailDto): Promise<ContentCubexDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ContentCubexDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ContentCubexDetails> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateContentCubexDetailDto): Promise<ContentCubexDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
