import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaLocationsStatus } from './entities/oda-locations-status.entity';
import { CreateOdaLocationsStatusDto } from './dto/create-oda-locations-status.dto';
import { UpdateOdaLocationsStatusDto } from './dto/update-oda-locations-status.dto';

@Injectable()
export class OdaLocationsStatusService {
  constructor(
    @InjectRepository(OdaLocationsStatus)
    private readonly repository: Repository<OdaLocationsStatus>,
  ) {}

  async create(createDto: CreateOdaLocationsStatusDto): Promise<OdaLocationsStatus> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaLocationsStatus[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaLocationsStatus> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaLocationsStatusDto): Promise<OdaLocationsStatus> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
