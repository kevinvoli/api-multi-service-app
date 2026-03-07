import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripMessages } from './entities/trip-message.entity';
import { CreateTripMessageDto } from './dto/create-trip-message.dto';
import { UpdateTripMessageDto } from './dto/update-trip-message.dto';

@Injectable()
export class TripMessagesService {
  constructor(
    @InjectRepository(TripMessages)
    private readonly repository: Repository<TripMessages>,
  ) {}

  async create(createDto: CreateTripMessageDto): Promise<TripMessages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripMessages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripMessages> {
    const entity = await this.repository.findOneBy({ iMessageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripMessageDto): Promise<TripMessages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
