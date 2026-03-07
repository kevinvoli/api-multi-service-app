import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterLngPages } from './entities/master-lng-page.entity';
import { CreateMasterLngPageDto } from './dto/create-master-lng-page.dto';
import { UpdateMasterLngPageDto } from './dto/update-master-lng-page.dto';

@Injectable()
export class MasterLngPagesService {
  constructor(
    @InjectRepository(MasterLngPages)
    private readonly repository: Repository<MasterLngPages>,
  ) {}

  async create(createDto: CreateMasterLngPageDto): Promise<MasterLngPages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MasterLngPages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MasterLngPages> {
    const entity = await this.repository.findOneBy({ iPageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMasterLngPageDto): Promise<MasterLngPages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
