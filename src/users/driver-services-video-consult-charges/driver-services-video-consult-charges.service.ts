import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverServicesVideoConsultCharges } from './entities/driver-services-video-consult-charge.entity';
import { CreateDriverServicesVideoConsultChargeDto } from './dto/create-driver-services-video-consult-charge.dto';
import { UpdateDriverServicesVideoConsultChargeDto } from './dto/update-driver-services-video-consult-charge.dto';

@Injectable()
export class DriverServicesVideoConsultChargesService {
  constructor(
    @InjectRepository(DriverServicesVideoConsultCharges)
    private readonly repository: Repository<DriverServicesVideoConsultCharges>,
  ) {}

  async create(createDto: CreateDriverServicesVideoConsultChargeDto): Promise<DriverServicesVideoConsultCharges> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverServicesVideoConsultCharges[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverServicesVideoConsultCharges> {
    const entity = await this.repository.findOneBy({ iDriverServiceId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverServicesVideoConsultChargeDto): Promise<DriverServicesVideoConsultCharges> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
