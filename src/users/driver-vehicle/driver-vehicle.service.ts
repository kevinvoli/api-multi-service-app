import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverVehicleDto } from './dto/create-driver-vehicle.dto';
import { UpdateDriverVehicleDto } from './dto/update-driver-vehicle.dto';
import { DriverVehicle } from './entities/driver-vehicle.entity';

@Injectable()
export class DriverVehicleService {
  constructor(
    @InjectRepository(DriverVehicle)
    private readonly driverVehicleRepository: Repository<DriverVehicle>,
  ) {}
  async create(createDriverVehicleDto: CreateDriverVehicleDto): Promise<DriverVehicle> {
    const newVehicle = this.driverVehicleRepository.create(createDriverVehicleDto);
    return await this.driverVehicleRepository.save(newVehicle);
  }

  async findAll(): Promise<DriverVehicle[]> {
    return await this.driverVehicleRepository.find();
  }

  async findOne(id: number): Promise<DriverVehicle> {
    const vehicle = await this.driverVehicleRepository.findOne({ where: { iDriverVehicleId: id } });
    if (!vehicle) {
      throw new NotFoundException(`Driver vehicle with ID "${id}" not found`);
    }
    return vehicle;
  }

  async update(id: number, updateDriverVehicleDto: UpdateDriverVehicleDto): Promise<DriverVehicle> {
    const vehicle = await this.driverVehicleRepository.preload({
      iDriverVehicleId: id,
      ...updateDriverVehicleDto,
    });
    if (!vehicle) {
      throw new NotFoundException(`Driver vehicle with ID "${id}" not found`);
    }
    return await this.driverVehicleRepository.save(vehicle);
  }

  async remove(id: number): Promise<DriverVehicle> {
    const vehicle = await this.findOne(id);
    vehicle.eStatus = 'Deleted';
    return await this.driverVehicleRepository.save(vehicle);
  }
}
