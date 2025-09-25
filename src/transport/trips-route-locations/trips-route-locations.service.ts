import { Injectable } from '@nestjs/common';
import { CreateTripsRouteLocationDto } from './dto/create-trips-route-location.dto';
import { UpdateTripsRouteLocationDto } from './dto/update-trips-route-location.dto';

@Injectable()
export class TripsRouteLocationsService {
  create(createTripsRouteLocationDto: CreateTripsRouteLocationDto) {
    return 'This action adds a new tripsRouteLocation';
  }

  findAll() {
    return `This action returns all tripsRouteLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripsRouteLocation`;
  }

  update(id: number, updateTripsRouteLocationDto: UpdateTripsRouteLocationDto) {
    return `This action updates a #${id} tripsRouteLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripsRouteLocation`;
  }
}
