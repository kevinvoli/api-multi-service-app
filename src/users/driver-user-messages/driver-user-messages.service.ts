import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverUserMessages } from './entities/driver-user-message.entity';
import { CreateDriverUserMessageDto } from './dto/create-driver-user-message.dto';
import { UpdateDriverUserMessageDto } from './dto/update-driver-user-message.dto';

@Injectable()
export class DriverUserMessagesService {
  constructor(
    @InjectRepository(DriverUserMessages)
    private readonly repository: Repository<DriverUserMessages>,
  ) {}

  async create(createDto: CreateDriverUserMessageDto): Promise<DriverUserMessages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverUserMessages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverUserMessages> {
    const entity = await this.repository.findOneBy({ iMessageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverUserMessageDto): Promise<DriverUserMessages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
