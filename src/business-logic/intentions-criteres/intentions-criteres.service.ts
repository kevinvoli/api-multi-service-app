import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IntentionsCriteres } from './entities/intentions-critere.entity';
import { CreateIntentionsCritereDto } from './dto/create-intentions-critere.dto';
import { UpdateIntentionsCritereDto } from './dto/update-intentions-critere.dto';

@Injectable()
export class IntentionsCriteresService {
  constructor(
    @InjectRepository(IntentionsCriteres)
    private readonly repository: Repository<IntentionsCriteres>,
  ) {}

  async create(createDto: CreateIntentionsCritereDto): Promise<IntentionsCriteres> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<IntentionsCriteres[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<IntentionsCriteres> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateIntentionsCritereDto): Promise<IntentionsCriteres> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
