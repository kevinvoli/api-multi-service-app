import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripStatusMessages } from './entities/trips-status-message.entity';
import { CreateTripsStatusMessageDto } from './dto/create-trips-status-message.dto';
import { UpdateTripsStatusMessageDto } from './dto/update-trips-status-message.dto';

@Injectable()
export class TripsStatusMessagesService {
  constructor(
    @InjectRepository(TripStatusMessages)
    private readonly repository: Repository<TripStatusMessages>,
  ) {}

  async create(createDto: CreateTripsStatusMessageDto): Promise<TripStatusMessages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripStatusMessages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripStatusMessages> {
    const entity = await this.repository.findOneBy({ iStatusId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripsStatusMessageDto): Promise<TripStatusMessages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
