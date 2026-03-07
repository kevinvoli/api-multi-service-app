import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaCommoditiesLocation } from './entities/oda-commodities-location.entity';
import { CreateOdaCommoditiesLocationDto } from './dto/create-oda-commodities-location.dto';
import { UpdateOdaCommoditiesLocationDto } from './dto/update-oda-commodities-location.dto';

@Injectable()
export class OdaCommoditiesLocationService {
  constructor(
    @InjectRepository(OdaCommoditiesLocation)
    private readonly repository: Repository<OdaCommoditiesLocation>,
  ) {}

  async create(createDto: CreateOdaCommoditiesLocationDto): Promise<OdaCommoditiesLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaCommoditiesLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaCommoditiesLocation> {
    const entity = await this.repository.findOneBy({ commoditieId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaCommoditiesLocationDto): Promise<OdaCommoditiesLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
