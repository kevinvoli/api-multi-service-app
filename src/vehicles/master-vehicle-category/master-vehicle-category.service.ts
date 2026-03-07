import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterVehicleCategory } from './entities/master-vehicle-category.entity';
import { CreateMasterVehicleCategoryDto } from './dto/create-master-vehicle-category.dto';
import { UpdateMasterVehicleCategoryDto } from './dto/update-master-vehicle-category.dto';

@Injectable()
export class MasterVehicleCategoryService {
  constructor(
    @InjectRepository(MasterVehicleCategory)
    private readonly repository: Repository<MasterVehicleCategory>,
  ) {}

  async create(createDto: CreateMasterVehicleCategoryDto): Promise<MasterVehicleCategory> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MasterVehicleCategory[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MasterVehicleCategory> {
    const entity = await this.repository.findOneBy({ iMasterVehicleCategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMasterVehicleCategoryDto): Promise<MasterVehicleCategory> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
