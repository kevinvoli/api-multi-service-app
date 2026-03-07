import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaAreasLocation } from './entities/oda-areas-location.entity';
import { CreateOdaAreasLocationDto } from './dto/create-oda-areas-location.dto';
import { UpdateOdaAreasLocationDto } from './dto/update-oda-areas-location.dto';

@Injectable()
export class OdaAreasLocationService {
  constructor(
    @InjectRepository(OdaAreasLocation)
    private readonly repository: Repository<OdaAreasLocation>,
  ) {}

  async create(createDto: CreateOdaAreasLocationDto): Promise<OdaAreasLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaAreasLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaAreasLocation> {
    const entity = await this.repository.findOneBy({ areaId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaAreasLocationDto): Promise<OdaAreasLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
