import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaItemsTypesLocation } from './entities/oda-items-types-location.entity';
import { CreateOdaItemsTypesLocationDto } from './dto/create-oda-items-types-location.dto';
import { UpdateOdaItemsTypesLocationDto } from './dto/update-oda-items-types-location.dto';

@Injectable()
export class OdaItemsTypesLocationService {
  constructor(
    @InjectRepository(OdaItemsTypesLocation)
    private readonly repository: Repository<OdaItemsTypesLocation>,
  ) {}

  async create(createDto: CreateOdaItemsTypesLocationDto): Promise<OdaItemsTypesLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaItemsTypesLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaItemsTypesLocation> {
    const entity = await this.repository.findOneBy({ itemTypeLocationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaItemsTypesLocationDto): Promise<OdaItemsTypesLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
