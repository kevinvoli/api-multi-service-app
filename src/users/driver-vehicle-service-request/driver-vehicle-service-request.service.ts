import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverVehicleServiceRequest } from './entities/driver-vehicle-service-request.entity';
import { CreateDriverVehicleServiceRequestDto } from './dto/create-driver-vehicle-service-request.dto';
import { UpdateDriverVehicleServiceRequestDto } from './dto/update-driver-vehicle-service-request.dto';

@Injectable()
export class DriverVehicleServiceRequestService {
  constructor(
    @InjectRepository(DriverVehicleServiceRequest)
    private readonly repository: Repository<DriverVehicleServiceRequest>,
  ) {}

  async create(createDto: CreateDriverVehicleServiceRequestDto): Promise<DriverVehicleServiceRequest> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverVehicleServiceRequest[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverVehicleServiceRequest> {
    const entity = await this.repository.findOneBy({ iRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverVehicleServiceRequestDto): Promise<DriverVehicleServiceRequest> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
