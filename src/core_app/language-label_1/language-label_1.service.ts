import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageLabel_1 } from './entities/language-label_1.entity';
import { CreateLanguageLabel1Dto } from './dto/create-language-label_1.dto';
import { UpdateLanguageLabel1Dto } from './dto/update-language-label_1.dto';

@Injectable()
export class LanguageLabel1Service {
  constructor(
    @InjectRepository(LanguageLabel_1)
    private readonly repository: Repository<LanguageLabel_1>,
  ) {}

  async create(createDto: CreateLanguageLabel1Dto): Promise<LanguageLabel_1> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LanguageLabel_1[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LanguageLabel_1> {
    const entity = await this.repository.findOneBy({ languageLabelId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLanguageLabel1Dto): Promise<LanguageLabel_1> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
