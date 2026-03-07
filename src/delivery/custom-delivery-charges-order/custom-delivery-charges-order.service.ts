import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomDeliveryChargesOrder } from './entities/custom-delivery-charges-order.entity';
import { CreateCustomDeliveryChargesOrderDto } from './dto/create-custom-delivery-charges-order.dto';
import { UpdateCustomDeliveryChargesOrderDto } from './dto/update-custom-delivery-charges-order.dto';

@Injectable()
export class CustomDeliveryChargesOrderService {
  constructor(
    @InjectRepository(CustomDeliveryChargesOrder)
    private readonly repository: Repository<CustomDeliveryChargesOrder>,
  ) {}

  async create(createDto: CreateCustomDeliveryChargesOrderDto): Promise<CustomDeliveryChargesOrder> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<CustomDeliveryChargesOrder[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CustomDeliveryChargesOrder> {
    const entity = await this.repository.findOneBy({ iDeliveyChargeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCustomDeliveryChargesOrderDto): Promise<CustomDeliveryChargesOrder> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
