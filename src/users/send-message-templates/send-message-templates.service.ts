import { Injectable } from '@nestjs/common';
import { CreateSendMessageTemplateDto } from './dto/create-send-message-template.dto';
import { UpdateSendMessageTemplateDto } from './dto/update-send-message-template.dto';

@Injectable()
export class SendMessageTemplatesService {
  create(createSendMessageTemplateDto: CreateSendMessageTemplateDto) {
    return 'This action adds a new sendMessageTemplate';
  }

  findAll() {
    return `This action returns all sendMessageTemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendMessageTemplate`;
  }

  update(id: number, updateSendMessageTemplateDto: UpdateSendMessageTemplateDto) {
    return `This action updates a #${id} sendMessageTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendMessageTemplate`;
  }
}
