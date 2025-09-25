import { Injectable } from '@nestjs/common';
import { CreateDriverDestinationsRouteDto } from './dto/create-driver-destinations-route.dto';
import { UpdateDriverDestinationsRouteDto } from './dto/update-driver-destinations-route.dto';

@Injectable()
export class DriverDestinationsRouteService {
  create(createDriverDestinationsRouteDto: CreateDriverDestinationsRouteDto) {
    return 'This action adds a new driverDestinationsRoute';
  }

  findAll() {
    return `This action returns all driverDestinationsRoute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverDestinationsRoute`;
  }

  update(id: number, updateDriverDestinationsRouteDto: UpdateDriverDestinationsRouteDto) {
    return `This action updates a #${id} driverDestinationsRoute`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverDestinationsRoute`;
  }
}
