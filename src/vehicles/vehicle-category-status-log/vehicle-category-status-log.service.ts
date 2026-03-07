import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleCategoryStatusLog } from './entities/vehicle-category-status-log.entity';
import { CreateVehicleCategoryStatusLogDto } from './dto/create-vehicle-category-status-log.dto';
import { UpdateVehicleCategoryStatusLogDto } from './dto/update-vehicle-category-status-log.dto';

@Injectable()
export class VehicleCategoryStatusLogService {
  constructor(
    @InjectRepository(VehicleCategoryStatusLog)
    private readonly repository: Repository<VehicleCategoryStatusLog>,
  ) {}

  async create(createDto: CreateVehicleCategoryStatusLogDto): Promise<VehicleCategoryStatusLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<VehicleCategoryStatusLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<VehicleCategoryStatusLog> {
    const entity = await this.repository.findOneBy({ iVehicleCategoryLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateVehicleCategoryStatusLogDto): Promise<VehicleCategoryStatusLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
