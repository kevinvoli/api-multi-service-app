import { Injectable } from '@nestjs/common';
import { CreateDriverDestinationDto } from './dto/create-driver-destination.dto';
import { UpdateDriverDestinationDto } from './dto/update-driver-destination.dto';

@Injectable()
export class DriverDestinationsService {
  create(createDriverDestinationDto: CreateDriverDestinationDto) {
    return 'This action adds a new driverDestination';
  }

  findAll() {
    return `This action returns all driverDestinations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverDestination`;
  }

  update(id: number, updateDriverDestinationDto: UpdateDriverDestinationDto) {
    return `This action updates a #${id} driverDestination`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverDestination`;
  }
}
