import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverVehicle } from './entities/driver-vehicle.entity';
import { CreateDriverVehicleDto } from './dto/create-driver-vehicle.dto';
import { UpdateDriverVehicleDto } from './dto/update-driver-vehicle.dto';

@Injectable()
export class DriverVehicleService {
  constructor(
    @InjectRepository(DriverVehicle)
    private readonly repository: Repository<DriverVehicle>,
  ) {}

  async create(createDto: CreateDriverVehicleDto): Promise<DriverVehicle> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverVehicle[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverVehicle> {
    const entity = await this.repository.findOneBy({ iDriverVehicleId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverVehicleDto): Promise<DriverVehicle> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
