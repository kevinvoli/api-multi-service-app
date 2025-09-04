import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripMessagesService } from './trip-messages.service';
import { CreateTripMessageDto } from './dto/create-trip-message.dto';
import { UpdateTripMessageDto } from './dto/update-trip-message.dto';

@Controller('trip-messages')
export class TripMessagesController {
  constructor(private readonly tripMessagesService: TripMessagesService) {}

  @Post()
  create(@Body() createTripMessageDto: CreateTripMessageDto) {
    return this.tripMessagesService.create(createTripMessageDto);
  }

  @Get()
  findAll() {
    return this.tripMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripMessageDto: UpdateTripMessageDto) {
    return this.tripMessagesService.update(+id, updateTripMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripMessagesService.remove(+id);
  }
}
