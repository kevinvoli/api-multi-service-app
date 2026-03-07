import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmergencyContactData } from './entities/emergency-cantact-datum.entity';
import { CreateEmergencyCantactDatumDto } from './dto/create-emergency-cantact-datum.dto';
import { UpdateEmergencyCantactDatumDto } from './dto/update-emergency-cantact-datum.dto';

@Injectable()
export class EmergencyCantactDataService {
  constructor(
    @InjectRepository(EmergencyContactData)
    private readonly repository: Repository<EmergencyContactData>,
  ) {}

  async create(createDto: CreateEmergencyCantactDatumDto): Promise<EmergencyContactData> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<EmergencyContactData[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<EmergencyContactData> {
    const entity = await this.repository.findOneBy({ iEmergencyContactId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateEmergencyCantactDatumDto): Promise<EmergencyContactData> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
