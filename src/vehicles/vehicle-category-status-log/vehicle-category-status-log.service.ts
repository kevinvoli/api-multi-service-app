import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleCategoryStatusLogDto } from './dto/create-vehicle-category-status-log.dto';
import { UpdateVehicleCategoryStatusLogDto } from './dto/update-vehicle-category-status-log.dto';
import { VehicleCategoryStatusLog } from './entities/vehicle-category-status-log.entity';

@Injectable()
export class VehicleCategoryStatusLogService {
  constructor(
    @InjectRepository(VehicleCategoryStatusLog)
    private readonly logRepository: Repository<VehicleCategoryStatusLog>,
  ) {}

  async create(createDto: CreateVehicleCategoryStatusLogDto): Promise<VehicleCategoryStatusLog> {
    const log = this.logRepository.create(createDto);
    return await this.logRepository.save(log);
  }

  async findAll(): Promise<VehicleCategoryStatusLog[]> {
    return await this.logRepository.find();
  }

  async findOne(id: number): Promise<VehicleCategoryStatusLog> {
    const log = await this.logRepository.findOne({ where: { iVehicleCategoryLogId: id } });
    if (!log) {
      throw new NotFoundException(`Log with ID #${id} not found`);
    }
    return log;
  }

  async update(id: number, updateDto: UpdateVehicleCategoryStatusLogDto): Promise<VehicleCategoryStatusLog> {
    const log = await this.findOne(id);
    this.logRepository.merge(log, updateDto);
    return await this.logRepository.save(log);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.logRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Log with ID #${id} not found`);
    }
    return { message: `Log with ID #${id} has been successfully deleted.` };
  }
}