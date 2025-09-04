import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendMessageTemplatesService } from './send-message-templates.service';
import { CreateSendMessageTemplateDto } from './dto/create-send-message-template.dto';
import { UpdateSendMessageTemplateDto } from './dto/update-send-message-template.dto';

@Controller('send-message-templates')
export class SendMessageTemplatesController {
  constructor(private readonly sendMessageTemplatesService: SendMessageTemplatesService) {}

  @Post()
  create(@Body() createSendMessageTemplateDto: CreateSendMessageTemplateDto) {
    return this.sendMessageTemplatesService.create(createSendMessageTemplateDto);
  }

  @Get()
  findAll() {
    return this.sendMessageTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sendMessageTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSendMessageTemplateDto: UpdateSendMessageTemplateDto) {
    return this.sendMessageTemplatesService.update(+id, updateSendMessageTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sendMessageTemplatesService.remove(+id);
  }
}
