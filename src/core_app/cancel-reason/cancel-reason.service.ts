import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CancelReason } from './entities/cancel-reason.entity';
import { CreateCancelReasonDto } from './dto/create-cancel-reason.dto';
import { UpdateCancelReasonDto } from './dto/update-cancel-reason.dto';

@Injectable()
export class CancelReasonService {
  constructor(
    @InjectRepository(CancelReason)
    private readonly repository: Repository<CancelReason>,
  ) {}

  async create(createDto: CreateCancelReasonDto): Promise<CancelReason> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<CancelReason[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CancelReason> {
    const entity = await this.repository.findOneBy({ iCancelReasonId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCancelReasonDto): Promise<CancelReason> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
