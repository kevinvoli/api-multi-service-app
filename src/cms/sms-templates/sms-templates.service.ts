import { Injectable } from '@nestjs/common';
import { CreateSmsTemplateDto } from './dto/create-sms-template.dto';
import { UpdateSmsTemplateDto } from './dto/update-sms-template.dto';

@Injectable()
export class SmsTemplatesService {
  create(createSmsTemplateDto: CreateSmsTemplateDto) {
    return 'This action adds a new smsTemplate';
  }

  findAll() {
    return `This action returns all smsTemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smsTemplate`;
  }

  update(id: number, updateSmsTemplateDto: UpdateSmsTemplateDto) {
    return `This action updates a #${id} smsTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} smsTemplate`;
  }
}
