import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsTemplatesService } from './sms-templates.service';
import { CreateSmsTemplateDto } from './dto/create-sms-template.dto';
import { UpdateSmsTemplateDto } from './dto/update-sms-template.dto';

@Controller('sms-templates')
export class SmsTemplatesController {
  constructor(private readonly smsTemplatesService: SmsTemplatesService) {}

  @Post()
  create(@Body() createSmsTemplateDto: CreateSmsTemplateDto) {
    return this.smsTemplatesService.create(createSmsTemplateDto);
  }

  @Get()
  findAll() {
    return this.smsTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smsTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmsTemplateDto: UpdateSmsTemplateDto) {
    return this.smsTemplatesService.update(+id, updateSmsTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smsTemplatesService.remove(+id);
  }
}
