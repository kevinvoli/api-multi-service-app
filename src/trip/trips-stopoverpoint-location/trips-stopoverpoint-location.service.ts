import { Injectable } from '@nestjs/common';
import { CreateTripsStopoverpointLocationDto } from './dto/create-trips-stopoverpoint-location.dto';
import { UpdateTripsStopoverpointLocationDto } from './dto/update-trips-stopoverpoint-location.dto';

@Injectable()
export class TripsStopoverpointLocationService {
  create(createTripsStopoverpointLocationDto: CreateTripsStopoverpointLocationDto) {
    return 'This action adds a new tripsStopoverpointLocation';
  }

  findAll() {
    return `This action returns all tripsStopoverpointLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripsStopoverpointLocation`;
  }

  update(id: number, updateTripsStopoverpointLocationDto: UpdateTripsStopoverpointLocationDto) {
    return `This action updates a #${id} tripsStopoverpointLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripsStopoverpointLocation`;
  }
}
