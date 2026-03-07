import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripDeliveryFields } from './entities/trip-delivery-field.entity';
import { CreateTripDeliveryFieldDto } from './dto/create-trip-delivery-field.dto';
import { UpdateTripDeliveryFieldDto } from './dto/update-trip-delivery-field.dto';

@Injectable()
export class TripDeliveryFieldsService {
  constructor(
    @InjectRepository(TripDeliveryFields)
    private readonly repository: Repository<TripDeliveryFields>,
  ) {}

  async create(createDto: CreateTripDeliveryFieldDto): Promise<TripDeliveryFields> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripDeliveryFields[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripDeliveryFields> {
    const entity = await this.repository.findOneBy({ iTripDeliveryFieldId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripDeliveryFieldDto): Promise<TripDeliveryFields> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
