import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageLabelOther } from './entities/language-label-other.entity';
import { CreateLanguageLabelOtherDto } from './dto/create-language-label-other.dto';
import { UpdateLanguageLabelOtherDto } from './dto/update-language-label-other.dto';

@Injectable()
export class LanguageLabelOtherService {
  constructor(
    @InjectRepository(LanguageLabelOther)
    private readonly repository: Repository<LanguageLabelOther>,
  ) {}

  async create(createDto: CreateLanguageLabelOtherDto): Promise<LanguageLabelOther> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LanguageLabelOther[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LanguageLabelOther> {
    const entity = await this.repository.findOneBy({ languageLabelId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLanguageLabelOtherDto): Promise<LanguageLabelOther> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
