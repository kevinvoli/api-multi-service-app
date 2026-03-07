import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleCategory } from './entities/vehicle-category.entity';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';

@Injectable()
export class VehicleCategoryService {
  constructor(
    @InjectRepository(VehicleCategory)
    private readonly repository: Repository<VehicleCategory>,
  ) {}

  async create(createDto: CreateVehicleCategoryDto): Promise<VehicleCategory> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<VehicleCategory[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<VehicleCategory> {
    const entity = await this.repository.findOneBy({ iVehicleCategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateVehicleCategoryDto): Promise<VehicleCategory> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
