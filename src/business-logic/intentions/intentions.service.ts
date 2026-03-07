import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Intentions } from './entities/intention.entity';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';

@Injectable()
export class IntentionsService {
  constructor(
    @InjectRepository(Intentions)
    private readonly repository: Repository<Intentions>,
  ) {}

  async create(createDto: CreateIntentionDto): Promise<Intentions> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Intentions[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Intentions> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateIntentionDto): Promise<Intentions> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
