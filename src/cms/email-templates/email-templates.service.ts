import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailTemplateDto } from './dto/create-email-template.dto';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';
import { EmailTemplates } from './entities/email-template.entity';

@Injectable()
export class EmailTemplatesService {
  constructor(
    @InjectRepository(EmailTemplates)
    private readonly emailTemplatesRepository: Repository<EmailTemplates>,
  ) {}

  async create(createEmailTemplateDto: CreateEmailTemplateDto): Promise<EmailTemplates> {
    const newTemplate = this.emailTemplatesRepository.create(createEmailTemplateDto);
    return this.emailTemplatesRepository.save(newTemplate);
  }

  async findAll(): Promise<EmailTemplates[]> {
    return this.emailTemplatesRepository.find();
  }

  async findOne(id: number): Promise<EmailTemplates> {
    const template = await this.emailTemplatesRepository.findOne({ where: { iEmailId: id } });
    if (!template) {
      throw new NotFoundException(`Email template with ID #${id} not found`);
    }
    return template;
  }

  async update(id: number, updateEmailTemplateDto: UpdateEmailTemplateDto): Promise<EmailTemplates> {
    const template = await this.findOne(id);
    this.emailTemplatesRepository.merge(template, updateEmailTemplateDto);
    return this.emailTemplatesRepository.save(template);
  }

  async remove(id: number): Promise<void> {
    const result = await this.emailTemplatesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Email template with ID #${id} not found`);
    }
  }
}