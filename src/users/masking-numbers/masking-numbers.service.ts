import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaskingNumbers } from './entities/masking-number.entity';
import { CreateMaskingNumberDto } from './dto/create-masking-number.dto';
import { UpdateMaskingNumberDto } from './dto/update-masking-number.dto';

@Injectable()
export class MaskingNumbersService {
  constructor(
    @InjectRepository(MaskingNumbers)
    private readonly repository: Repository<MaskingNumbers>,
  ) {}

  async create(createDto: CreateMaskingNumberDto): Promise<MaskingNumbers> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MaskingNumbers[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MaskingNumbers> {
    const entity = await this.repository.findOneBy({ masknumId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMaskingNumberDto): Promise<MaskingNumbers> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
