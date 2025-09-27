import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsTemplatesService } from './sms-templates.service';
import { CreateSmsTemplateDto } from './dto/create-sms-template.dto';
import { UpdateSmsTemplateDto } from './dto/update-sms-template.dto';

@Controller('sms-templates')
export class SmsTemplatesController {
  constructor(private readonly smsTemplatesService: SmsTemplatesService) {}

  @Post()
  async create(@Body() createSmsTemplateDto: CreateSmsTemplateDto) {
    return await this.smsTemplatesService.create(createSmsTemplateDto);
  }

  @Get()
  async findAll() {
    return await this.smsTemplatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.smsTemplatesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSmsTemplateDto: UpdateSmsTemplateDto) {
    return await this.smsTemplatesService.update(+id, updateSmsTemplateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.smsTemplatesService.remove(+id);
  }
}