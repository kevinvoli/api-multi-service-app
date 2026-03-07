import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CabRequestNow } from './entities/cab-request-now.entity';
import { CreateCabRequestNowDto } from './dto/create-cab-request-now.dto';
import { UpdateCabRequestNowDto } from './dto/update-cab-request-now.dto';

@Injectable()
export class CabRequestNowService {
  constructor(
    @InjectRepository(CabRequestNow)
    private readonly repository: Repository<CabRequestNow>,
  ) {}

  async create(createDto: CreateCabRequestNowDto): Promise<CabRequestNow> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<CabRequestNow[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CabRequestNow> {
    const entity = await this.repository.findOneBy({ iCabRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCabRequestNowDto): Promise<CabRequestNow> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
