import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailTemplatesService } from './email-templates.service';
import { CreateEmailTemplateDto } from './dto/create-email-template.dto';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';

@Controller('email-templates')
export class EmailTemplatesController {
  constructor(private readonly emailTemplatesService: EmailTemplatesService) {}

  @Post()
  async create(@Body() createEmailTemplateDto: CreateEmailTemplateDto) {
    return await this.emailTemplatesService.create(createEmailTemplateDto);
  }

  @Get()
  async findAll() {
    return await this.emailTemplatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.emailTemplatesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmailTemplateDto: UpdateEmailTemplateDto) {
    return await this.emailTemplatesService.update(+id, updateEmailTemplateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.emailTemplatesService.remove(+id);
  }
}