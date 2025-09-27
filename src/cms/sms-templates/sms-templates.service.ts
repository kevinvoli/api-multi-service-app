import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSmsTemplateDto } from './dto/create-sms-template.dto';
import { UpdateSmsTemplateDto } from './dto/update-sms-template.dto';
import { SmsTemplates } from './entities/sms-template.entity';

@Injectable()
export class SmsTemplatesService {
  constructor(
    @InjectRepository(SmsTemplates)
    private readonly smsTemplatesRepository: Repository<SmsTemplates>,
  ) {}

  async create(createSmsTemplateDto: CreateSmsTemplateDto): Promise<SmsTemplates> {
    const newTemplate = this.smsTemplatesRepository.create(createSmsTemplateDto);
    return this.smsTemplatesRepository.save(newTemplate);
  }

  async findAll(): Promise<SmsTemplates[]> {
    return this.smsTemplatesRepository.find();
  }

  async findOne(id: number): Promise<SmsTemplates> {
    const template = await this.smsTemplatesRepository.findOne({ where: { iSmsId: id } });
    if (!template) {
      throw new NotFoundException(`SMS template with ID #${id} not found`);
    }
    return template;
  }

  async update(id: number, updateSmsTemplateDto: UpdateSmsTemplateDto): Promise<SmsTemplates> {
    const template = await this.findOne(id);
    this.smsTemplatesRepository.merge(template, updateSmsTemplateDto);
    return this.smsTemplatesRepository.save(template);
  }

  async remove(id: number): Promise<void> {
    const result = await this.smsTemplatesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`SMS template with ID #${id} not found`);
    }
  }
}