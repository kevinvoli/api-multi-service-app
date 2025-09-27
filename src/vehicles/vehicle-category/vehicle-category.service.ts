import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';
import { VehicleCategory } from './entities/vehicle-category.entity';

@Injectable()
export class VehicleCategoryService {
  constructor(
    @InjectRepository(VehicleCategory)
    private readonly vehicleCategoryRepository: Repository<VehicleCategory>,
  ) {}

  async create(createVehicleCategoryDto: CreateVehicleCategoryDto): Promise<VehicleCategory> {
    const vehicleCategory = this.vehicleCategoryRepository.create(createVehicleCategoryDto);
    return await this.vehicleCategoryRepository.save(vehicleCategory);
  }

  async findAll(): Promise<VehicleCategory[]> {
    return await this.vehicleCategoryRepository.find({
      where: { eStatus: 'Active' },
    });
  }

  async findOne(id: number): Promise<VehicleCategory> {
    const vehicleCategory = await this.vehicleCategoryRepository.findOne({ where: { iVehicleCategoryId: id } });
    if (!vehicleCategory) {
      throw new NotFoundException(`Vehicle category with ID #${id} not found`);
    }
    return vehicleCategory;
  }

  async update(id: number, updateVehicleCategoryDto: UpdateVehicleCategoryDto): Promise<VehicleCategory> {
    const vehicleCategory = await this.findOne(id);
    this.vehicleCategoryRepository.merge(vehicleCategory, updateVehicleCategoryDto);
    return await this.vehicleCategoryRepository.save(vehicleCategory);
  }

  async remove(id: number): Promise<{ message: string }> {
    const vehicleCategory = await this.findOne(id);
    vehicleCategory.eStatus = 'Deleted';
    await this.vehicleCategoryRepository.save(vehicleCategory);
    return { message: `Vehicle category with ID #${id} has been successfully deleted.` };
  }
}