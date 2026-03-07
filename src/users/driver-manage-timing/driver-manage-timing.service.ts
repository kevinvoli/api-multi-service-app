import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverManageTiming } from './entities/driver-manage-timing.entity';
import { CreateDriverManageTimingDto } from './dto/create-driver-manage-timing.dto';
import { UpdateDriverManageTimingDto } from './dto/update-driver-manage-timing.dto';

@Injectable()
export class DriverManageTimingService {
  constructor(
    @InjectRepository(DriverManageTiming)
    private readonly repository: Repository<DriverManageTiming>,
  ) {}

  async create(createDto: CreateDriverManageTimingDto): Promise<DriverManageTiming> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverManageTiming[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverManageTiming> {
    const entity = await this.repository.findOneBy({ iDriverTimingId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverManageTimingDto): Promise<DriverManageTiming> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
