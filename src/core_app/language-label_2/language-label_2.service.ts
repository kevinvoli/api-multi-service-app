import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageLabel_2 } from './entities/language-label_2.entity';
import { CreateLanguageLabel2Dto } from './dto/create-language-label_2.dto';
import { UpdateLanguageLabel2Dto } from './dto/update-language-label_2.dto';

@Injectable()
export class LanguageLabel2Service {
  constructor(
    @InjectRepository(LanguageLabel_2)
    private readonly repository: Repository<LanguageLabel_2>,
  ) {}

  async create(createDto: CreateLanguageLabel2Dto): Promise<LanguageLabel_2> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LanguageLabel_2[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LanguageLabel_2> {
    const entity = await this.repository.findOneBy({ languageLabelId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLanguageLabel2Dto): Promise<LanguageLabel_2> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
