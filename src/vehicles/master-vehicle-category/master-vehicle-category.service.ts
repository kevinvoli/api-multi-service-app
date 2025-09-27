import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMasterVehicleCategoryDto } from './dto/create-master-vehicle-category.dto';
import { UpdateMasterVehicleCategoryDto } from './dto/update-master-vehicle-category.dto';
import { MasterVehicleCategory } from './entities/master-vehicle-category.entity';

@Injectable()
export class MasterVehicleCategoryService {
  constructor(
    @InjectRepository(MasterVehicleCategory)
    private readonly masterVehicleCategoryRepository: Repository<MasterVehicleCategory>,
  ) {}

  async create(createMasterVehicleCategoryDto: CreateMasterVehicleCategoryDto): Promise<MasterVehicleCategory> {
    const category = this.masterVehicleCategoryRepository.create(createMasterVehicleCategoryDto);
    return await this.masterVehicleCategoryRepository.save(category);
  }

  async findAll(): Promise<MasterVehicleCategory[]> {
    return await this.masterVehicleCategoryRepository.find();
  }

  async findOne(id: number): Promise<MasterVehicleCategory> {
    const category = await this.masterVehicleCategoryRepository.findOne({ where: { iMasterVehicleCategoryId: id } });
    if (!category) {
      throw new NotFoundException(`Master vehicle category with ID #${id} not found`);
    }
    return category;
  }

  async update(id: number, updateMasterVehicleCategoryDto: UpdateMasterVehicleCategoryDto): Promise<MasterVehicleCategory> {
    const category = await this.findOne(id);
    this.masterVehicleCategoryRepository.merge(category, updateMasterVehicleCategoryDto);
    return await this.masterVehicleCategoryRepository.save(category);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.masterVehicleCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Master vehicle category with ID #${id} not found`);
    }
    return { message: `Master vehicle category with ID #${id} has been successfully deleted.` };
  }
}