import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageLabel } from './entities/language-label.entity';
import { CreateLanguageLabelDto } from './dto/create-language-label.dto';
import { UpdateLanguageLabelDto } from './dto/update-language-label.dto';

@Injectable()
export class LanguageLabelService {
  constructor(
    @InjectRepository(LanguageLabel)
    private readonly repository: Repository<LanguageLabel>,
  ) {}

  async create(createDto: CreateLanguageLabelDto): Promise<LanguageLabel> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LanguageLabel[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LanguageLabel> {
    const entity = await this.repository.findOneBy({ languageLabelId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLanguageLabelDto): Promise<LanguageLabel> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
