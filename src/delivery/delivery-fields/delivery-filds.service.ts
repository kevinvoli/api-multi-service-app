import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryFields } from './entities/delivery-field.entity';
import { CreateDeliveryFildDto } from './dto/create-delivery-fild.dto';
import { UpdateDeliveryFildDto } from './dto/update-delivery-fild.dto';

@Injectable()
export class DeliveryFildsService {
  constructor(
    @InjectRepository(DeliveryFields)
    private readonly repository: Repository<DeliveryFields>,
  ) {}

  async create(createDto: CreateDeliveryFildDto): Promise<DeliveryFields> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DeliveryFields[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DeliveryFields> {
    const entity = await this.repository.findOneBy({ iDeliveryFieldId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDeliveryFildDto): Promise<DeliveryFields> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
