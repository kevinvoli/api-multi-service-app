import { Injectable } from '@nestjs/common';
import { CreateTripsDeliveryLocationDto } from './dto/create-trips-delivery-location.dto';
import { UpdateTripsDeliveryLocationDto } from './dto/update-trips-delivery-location.dto';

@Injectable()
export class TripsDeliveryLocationsService {
  create(createTripsDeliveryLocationDto: CreateTripsDeliveryLocationDto) {
    return 'This action adds a new tripsDeliveryLocation';
  }

  findAll() {
    return `This action returns all tripsDeliveryLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripsDeliveryLocation`;
  }

  update(id: number, updateTripsDeliveryLocationDto: UpdateTripsDeliveryLocationDto) {
    return `This action updates a #${id} tripsDeliveryLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripsDeliveryLocation`;
  }
}
