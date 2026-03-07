import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaSousItemsTypesLocation } from './entities/oda-sous-items-types-location.entity';
import { CreateOdaSousItemsTypesLocationDto } from './dto/create-oda-sous-items-types-location.dto';
import { UpdateOdaSousItemsTypesLocationDto } from './dto/update-oda-sous-items-types-location.dto';

@Injectable()
export class OdaSousItemsTypesLocationService {
  constructor(
    @InjectRepository(OdaSousItemsTypesLocation)
    private readonly repository: Repository<OdaSousItemsTypesLocation>,
  ) {}

  async create(createDto: CreateOdaSousItemsTypesLocationDto): Promise<OdaSousItemsTypesLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaSousItemsTypesLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaSousItemsTypesLocation> {
    const entity = await this.repository.findOneBy({ sousTypeLocationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaSousItemsTypesLocationDto): Promise<OdaSousItemsTypesLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
