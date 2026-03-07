import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SmsTemplates } from './entities/sms-template.entity';
import { CreateSmsTemplateDto } from './dto/create-sms-template.dto';
import { UpdateSmsTemplateDto } from './dto/update-sms-template.dto';

@Injectable()
export class SmsTemplatesService {
  constructor(
    @InjectRepository(SmsTemplates)
    private readonly repository: Repository<SmsTemplates>,
  ) {}

  async create(createDto: CreateSmsTemplateDto): Promise<SmsTemplates> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<SmsTemplates[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<SmsTemplates> {
    const entity = await this.repository.findOneBy({ iSmsId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateSmsTemplateDto): Promise<SmsTemplates> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
