import { Injectable } from '@nestjs/common';
import { CreateDriverUserMessageDto } from './dto/create-driver-user-message.dto';
import { UpdateDriverUserMessageDto } from './dto/update-driver-user-message.dto';

@Injectable()
export class DriverUserMessagesService {
  create(createDriverUserMessageDto: CreateDriverUserMessageDto) {
    return 'This action adds a new driverUserMessage';
  }

  findAll() {
    return `This action returns all driverUserMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverUserMessage`;
  }

  update(id: number, updateDriverUserMessageDto: UpdateDriverUserMessageDto) {
    return `This action updates a #${id} driverUserMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverUserMessage`;
  }
}
