import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassengerRequestsService } from './passenger-requests.service';
import { CreatePassengerRequestDto } from './dto/create-passenger-request.dto';
import { UpdatePassengerRequestDto } from './dto/update-passenger-request.dto';

@Controller('passenger-requests')
export class PassengerRequestsController {
  constructor(private readonly passengerRequestsService: PassengerRequestsService) {}

  @Post()
  create(@Body() createPassengerRequestDto: CreatePassengerRequestDto) {
    return this.passengerRequestsService.create(createPassengerRequestDto);
  }

  @Get()
  findAll() {
    return this.passengerRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassengerRequestDto: UpdatePassengerRequestDto) {
    return this.passengerRequestsService.update(+id, updatePassengerRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengerRequestsService.remove(+id);
  }
}
