import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { VehicleType } from './entities/vehicle-type.entity';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType)
    private readonly vehicleTypeRepository: Repository<VehicleType>,
  ) {}

  async create(createDto: CreateVehicleTypeDto): Promise<VehicleType> {
    const vehicleType = this.vehicleTypeRepository.create(createDto);
    return await this.vehicleTypeRepository.save(vehicleType);
  }

  async findAll(): Promise<VehicleType[]> {
    return await this.vehicleTypeRepository.find({
      where: { eStatus: 'Active' },
    });
  }

  async findOne(id: number): Promise<VehicleType> {
    const vehicleType = await this.vehicleTypeRepository.findOne({ where: { iVehicleTypeId: id } });
    if (!vehicleType) {
      throw new NotFoundException(`Vehicle type with ID #${id} not found`);
    }
    return vehicleType;
  }

  async update(id: number, updateDto: UpdateVehicleTypeDto): Promise<VehicleType> {
    const vehicleType = await this.findOne(id);
    this.vehicleTypeRepository.merge(vehicleType, updateDto);
    return await this.vehicleTypeRepository.save(vehicleType);
  }

  async remove(id: number): Promise<{ message: string }> {
    const vehicleType = await this.findOne(id);
    vehicleType.eStatus = 'Deleted';
    await this.vehicleTypeRepository.save(vehicleType);
    return { message: `Vehicle type with ID #${id} has been successfully deleted.` };
  }
}