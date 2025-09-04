import { Injectable } from '@nestjs/common';
import { CreateTripDestinationDto } from './dto/create-trip-destination.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';

@Injectable()
export class TripDestinationsService {
  create(createTripDestinationDto: CreateTripDestinationDto) {
    return 'This action adds a new tripDestination';
  }

  findAll() {
    return `This action returns all tripDestinations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripDestination`;
  }

  update(id: number, updateTripDestinationDto: UpdateTripDestinationDto) {
    return `This action updates a #${id} tripDestination`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripDestination`;
  }
}
