import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PassengerRequests } from './entities/passenger-request.entity';
import { CreatePassengerRequestDto } from './dto/create-passenger-request.dto';
import { UpdatePassengerRequestDto } from './dto/update-passenger-request.dto';

@Injectable()
export class PassengerRequestsService {
  constructor(
    @InjectRepository(PassengerRequests)
    private readonly repository: Repository<PassengerRequests>,
  ) {}

  async create(createDto: CreatePassengerRequestDto): Promise<PassengerRequests> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PassengerRequests[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PassengerRequests> {
    const entity = await this.repository.findOneBy({ iRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePassengerRequestDto): Promise<PassengerRequests> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
