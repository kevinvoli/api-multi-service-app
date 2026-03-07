import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryPreferences } from './entities/delivery-preference.entity';
import { CreateDeliveryPreferenceDto } from './dto/create-delivery-preference.dto';
import { UpdateDeliveryPreferenceDto } from './dto/update-delivery-preference.dto';

@Injectable()
export class DeliveryPreferencesService {
  constructor(
    @InjectRepository(DeliveryPreferences)
    private readonly repository: Repository<DeliveryPreferences>,
  ) {}

  async create(createDto: CreateDeliveryPreferenceDto): Promise<DeliveryPreferences> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DeliveryPreferences[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DeliveryPreferences> {
    const entity = await this.repository.findOneBy({ iPreferenceId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDeliveryPreferenceDto): Promise<DeliveryPreferences> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
