import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaSousServicesLocation } from './entities/oda-sous-services-location.entity';
import { CreateOdaSousServicesLocationDto } from './dto/create-oda-sous-services-location.dto';
import { UpdateOdaSousServicesLocationDto } from './dto/update-oda-sous-services-location.dto';

@Injectable()
export class OdaSousServicesLocationService {
  constructor(
    @InjectRepository(OdaSousServicesLocation)
    private readonly repository: Repository<OdaSousServicesLocation>,
  ) {}

  async create(createDto: CreateOdaSousServicesLocationDto): Promise<OdaSousServicesLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaSousServicesLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaSousServicesLocation> {
    const entity = await this.repository.findOneBy({ sousServiceId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaSousServicesLocationDto): Promise<OdaSousServicesLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
