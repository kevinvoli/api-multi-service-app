import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PushnotificationLogService } from './pushnotification-log.service';
import { CreatePushnotificationLogDto } from './dto/create-pushnotification-log.dto';
import { UpdatePushnotificationLogDto } from './dto/update-pushnotification-log.dto';

@Controller('pushnotification-log')
export class PushnotificationLogController {
  constructor(private readonly pushnotificationLogService: PushnotificationLogService) {}

  @Post()
  create(@Body() createPushnotificationLogDto: CreatePushnotificationLogDto) {
    return this.pushnotificationLogService.create(createPushnotificationLogDto);
  }

  @Get()
  findAll() {
    return this.pushnotificationLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pushnotificationLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePushnotificationLogDto: UpdatePushnotificationLogDto) {
    return this.pushnotificationLogService.update(+id, updatePushnotificationLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pushnotificationLogService.remove(+id);
  }
}
