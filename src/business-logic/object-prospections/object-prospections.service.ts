import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectProspections } from './entities/object-prospection.entity';
import { CreateObjectProspectionDto } from './dto/create-object-prospection.dto';
import { UpdateObjectProspectionDto } from './dto/update-object-prospection.dto';

@Injectable()
export class ObjectProspectionsService {
  constructor(
    @InjectRepository(ObjectProspections)
    private readonly repository: Repository<ObjectProspections>,
  ) {}

  async create(
    createDto: CreateObjectProspectionDto,
  ): Promise<ObjectProspections> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ObjectProspections[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ObjectProspections> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(
    id: number,
    updateDto: UpdateObjectProspectionDto,
  ): Promise<ObjectProspections> {
    await this.repository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
