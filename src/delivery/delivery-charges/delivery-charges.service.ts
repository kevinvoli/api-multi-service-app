import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryCharges } from './entities/delivery-charge.entity';
import { CreateDeliveryChargeDto } from './dto/create-delivery-charge.dto';
import { UpdateDeliveryChargeDto } from './dto/update-delivery-charge.dto';

@Injectable()
export class DeliveryChargesService {
  constructor(
    @InjectRepository(DeliveryCharges)
    private readonly repository: Repository<DeliveryCharges>,
  ) {}

  async create(createDto: CreateDeliveryChargeDto): Promise<DeliveryCharges> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DeliveryCharges[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DeliveryCharges> {
    const entity = await this.repository.findOneBy({ iDeliveyChargeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDeliveryChargeDto): Promise<DeliveryCharges> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
