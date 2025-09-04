import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripsStatusMessagesService } from './trips-status-messages.service';
import { CreateTripsStatusMessageDto } from './dto/create-trips-status-message.dto';
import { UpdateTripsStatusMessageDto } from './dto/update-trips-status-message.dto';

@Controller('trips-status-messages')
export class TripsStatusMessagesController {
  constructor(private readonly tripsStatusMessagesService: TripsStatusMessagesService) {}

  @Post()
  create(@Body() createTripsStatusMessageDto: CreateTripsStatusMessageDto) {
    return this.tripsStatusMessagesService.create(createTripsStatusMessageDto);
  }

  @Get()
  findAll() {
    return this.tripsStatusMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsStatusMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripsStatusMessageDto: UpdateTripsStatusMessageDto) {
    return this.tripsStatusMessagesService.update(+id, updateTripsStatusMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsStatusMessagesService.remove(+id);
  }
}
