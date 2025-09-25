import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationSoundService } from './notification-sound.service';
import { CreateNotificationSoundDto } from './dto/create-notification-sound.dto';
import { UpdateNotificationSoundDto } from './dto/update-notification-sound.dto';

@Controller('notification-sound')
export class NotificationSoundController {
  constructor(private readonly notificationSoundService: NotificationSoundService) {}

  @Post()
  create(@Body() createNotificationSoundDto: CreateNotificationSoundDto) {
    return this.notificationSoundService.create(createNotificationSoundDto);
  }

  @Get()
  findAll() {
    return this.notificationSoundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationSoundService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationSoundDto: UpdateNotificationSoundDto) {
    return this.notificationSoundService.update(+id, updateNotificationSoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationSoundService.remove(+id);
  }
}
