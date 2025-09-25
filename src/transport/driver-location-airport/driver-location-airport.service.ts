import { Injectable } from '@nestjs/common';
import { CreateDriverLocationAirportDto } from './dto/create-driver-location-airport.dto';
import { UpdateDriverLocationAirportDto } from './dto/update-driver-location-airport.dto';

@Injectable()
export class DriverLocationAirportService {
  create(createDriverLocationAirportDto: CreateDriverLocationAirportDto) {
    return 'This action adds a new driverLocationAirport';
  }

  findAll() {
    return `This action returns all driverLocationAirport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverLocationAirport`;
  }

  update(id: number, updateDriverLocationAirportDto: UpdateDriverLocationAirportDto) {
    return `This action updates a #${id} driverLocationAirport`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverLocationAirport`;
  }
}
