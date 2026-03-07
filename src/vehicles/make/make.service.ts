import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Make } from './entities/make.entity';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';

@Injectable()
export class MakeService {
  constructor(
    @InjectRepository(Make)
    private readonly repository: Repository<Make>,
  ) {}

  async create(createDto: CreateMakeDto): Promise<Make> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Make[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Make> {
    const entity = await this.repository.findOneBy({ iMakeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMakeDto): Promise<Make> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
