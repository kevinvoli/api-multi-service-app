import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LangConversionProcess } from './entities/lang-conversion-process.entity';
import { CreateLangConversionProcessDto } from './dto/create-lang-conversion-process.dto';
import { UpdateLangConversionProcessDto } from './dto/update-lang-conversion-process.dto';

@Injectable()
export class LangConversionProcessService {
  constructor(
    @InjectRepository(LangConversionProcess)
    private readonly repository: Repository<LangConversionProcess>,
  ) {}

  async create(createDto: CreateLangConversionProcessDto): Promise<LangConversionProcess> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LangConversionProcess[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LangConversionProcess> {
    const entity = await this.repository.findOneBy({ iProcessId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLangConversionProcessDto): Promise<LangConversionProcess> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
