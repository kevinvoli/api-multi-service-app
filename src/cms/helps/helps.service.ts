import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Helps } from './entities/help.entity';
import { CreateHelpDto } from './dto/create-help.dto';
import { UpdateHelpDto } from './dto/update-help.dto';

@Injectable()
export class HelpsService {
  constructor(
    @InjectRepository(Helps)
    private readonly repository: Repository<Helps>,
  ) {}

  async create(createDto: CreateHelpDto): Promise<Helps> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Helps[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Helps> {
    const entity = await this.repository.findOneBy({ iHelpsId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHelpDto): Promise<Helps> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
