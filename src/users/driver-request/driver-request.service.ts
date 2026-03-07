import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverRequest } from './entities/driver-request.entity';
import { CreateDriverRequestDto } from './dto/create-driver-request.dto';
import { UpdateDriverRequestDto } from './dto/update-driver-request.dto';

@Injectable()
export class DriverRequestService {
  constructor(
    @InjectRepository(DriverRequest)
    private readonly repository: Repository<DriverRequest>,
  ) {}

  async create(createDto: CreateDriverRequestDto): Promise<DriverRequest> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverRequest[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverRequest> {
    const entity = await this.repository.findOneBy({ iDriverRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverRequestDto): Promise<DriverRequest> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
