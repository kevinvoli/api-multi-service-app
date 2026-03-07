import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectRealisations } from './entities/object-realisation.entity';
import { CreateObjectRealisationDto } from './dto/create-object-realisation.dto';
import { UpdateObjectRealisationDto } from './dto/update-object-realisation.dto';

@Injectable()
export class ObjectRealisationService {
  constructor(
    @InjectRepository(ObjectRealisations)
    private readonly repository: Repository<ObjectRealisations>,
  ) {}

  async create(createDto: CreateObjectRealisationDto): Promise<ObjectRealisations> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ObjectRealisations[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ObjectRealisations> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateObjectRealisationDto): Promise<ObjectRealisations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
