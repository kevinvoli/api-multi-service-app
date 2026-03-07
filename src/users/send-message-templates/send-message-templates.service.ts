import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SendMessageTemplates } from './entities/send-message-template.entity';
import { CreateSendMessageTemplateDto } from './dto/create-send-message-template.dto';
import { UpdateSendMessageTemplateDto } from './dto/update-send-message-template.dto';

@Injectable()
export class SendMessageTemplatesService {
  constructor(
    @InjectRepository(SendMessageTemplates)
    private readonly repository: Repository<SendMessageTemplates>,
  ) {}

  async create(createDto: CreateSendMessageTemplateDto): Promise<SendMessageTemplates> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<SendMessageTemplates[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<SendMessageTemplates> {
    const entity = await this.repository.findOneBy({ iSendMessageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateSendMessageTemplateDto): Promise<SendMessageTemplates> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
