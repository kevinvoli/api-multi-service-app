import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverUserMessagesService } from './driver-user-messages.service';
import { CreateDriverUserMessageDto } from './dto/create-driver-user-message.dto';
import { UpdateDriverUserMessageDto } from './dto/update-driver-user-message.dto';

@Controller('driver-user-messages')
export class DriverUserMessagesController {
  constructor(private readonly driverUserMessagesService: DriverUserMessagesService) {}

  @Post()
  create(@Body() createDriverUserMessageDto: CreateDriverUserMessageDto) {
    return this.driverUserMessagesService.create(createDriverUserMessageDto);
  }

  @Get()
  findAll() {
    return this.driverUserMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverUserMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverUserMessageDto: UpdateDriverUserMessageDto) {
    return this.driverUserMessagesService.update(+id, updateDriverUserMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverUserMessagesService.remove(+id);
  }
}
