import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectObjectifs } from './entities/object-objectif.entity';
import { CreateObjectObjectifDto } from './dto/create-object-objectif.dto';
import { UpdateObjectObjectifDto } from './dto/update-object-objectif.dto';

@Injectable()
export class ObjectObjectifsService {
  constructor(
    @InjectRepository(ObjectObjectifs)
    private readonly repository: Repository<ObjectObjectifs>,
  ) {}

  async create(createDto: CreateObjectObjectifDto): Promise<ObjectObjectifs> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ObjectObjectifs[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ObjectObjectifs> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateObjectObjectifDto): Promise<ObjectObjectifs> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
