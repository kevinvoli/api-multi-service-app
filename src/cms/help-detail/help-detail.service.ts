import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpDetail } from './entities/help-detail.entity';
import { CreateHelpDetailDto } from './dto/create-help-detail.dto';
import { UpdateHelpDetailDto } from './dto/update-help-detail.dto';

@Injectable()
export class HelpDetailService {
  constructor(
    @InjectRepository(HelpDetail)
    private readonly repository: Repository<HelpDetail>,
  ) {}

  async create(createDto: CreateHelpDetailDto): Promise<HelpDetail> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HelpDetail[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HelpDetail> {
    const entity = await this.repository.findOneBy({ iHelpDetailId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHelpDetailDto): Promise<HelpDetail> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
