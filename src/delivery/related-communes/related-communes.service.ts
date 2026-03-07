import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RelatedCommunes } from './entities/related-commune.entity';
import { CreateRelatedCommuneDto } from './dto/create-related-commune.dto';
import { UpdateRelatedCommuneDto } from './dto/update-related-commune.dto';

@Injectable()
export class RelatedCommunesService {
  constructor(
    @InjectRepository(RelatedCommunes)
    private readonly repository: Repository<RelatedCommunes>,
  ) {}

  async create(createDto: CreateRelatedCommuneDto): Promise<RelatedCommunes> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RelatedCommunes[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RelatedCommunes> {
    const entity = await this.repository.findOneBy({ communeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRelatedCommuneDto): Promise<RelatedCommunes> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
