import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestDataDebug } from './entities/request-data-debug.entity';
import { CreateRequestDataDebugDto } from './dto/create-request-data-debug.dto';
import { UpdateRequestDataDebugDto } from './dto/update-request-data-debug.dto';

@Injectable()
export class RequestDataDebugService {
  constructor(
    @InjectRepository(RequestDataDebug)
    private readonly repository: Repository<RequestDataDebug>,
  ) {}

  async create(createDto: CreateRequestDataDebugDto): Promise<RequestDataDebug> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RequestDataDebug[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RequestDataDebug> {
    const entity = await this.repository.findOneBy({ iRequestData: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRequestDataDebugDto): Promise<RequestDataDebug> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
