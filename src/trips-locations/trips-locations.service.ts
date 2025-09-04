import { Injectable } from '@nestjs/common';
import { CreateTripsLocationDto } from './dto/create-trips-location.dto';
import { UpdateTripsLocationDto } from './dto/update-trips-location.dto';

@Injectable()
export class TripsLocationsService {
  create(createTripsLocationDto: CreateTripsLocationDto) {
    return 'This action adds a new tripsLocation';
  }

  findAll() {
    return `This action returns all tripsLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripsLocation`;
  }

  update(id: number, updateTripsLocationDto: UpdateTripsLocationDto) {
    return `This action updates a #${id} tripsLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripsLocation`;
  }
}
