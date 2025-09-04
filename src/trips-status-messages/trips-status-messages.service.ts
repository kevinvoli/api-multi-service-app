import { Injectable } from '@nestjs/common';
import { CreateTripsStatusMessageDto } from './dto/create-trips-status-message.dto';
import { UpdateTripsStatusMessageDto } from './dto/update-trips-status-message.dto';

@Injectable()
export class TripsStatusMessagesService {
  create(createTripsStatusMessageDto: CreateTripsStatusMessageDto) {
    return 'This action adds a new tripsStatusMessage';
  }

  findAll() {
    return `This action returns all tripsStatusMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripsStatusMessage`;
  }

  update(id: number, updateTripsStatusMessageDto: UpdateTripsStatusMessageDto) {
    return `This action updates a #${id} tripsStatusMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripsStatusMessage`;
  }
}
