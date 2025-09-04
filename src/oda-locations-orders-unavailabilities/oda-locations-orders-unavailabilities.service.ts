import { Injectable } from '@nestjs/common';
import { CreateOdaLocationsOrdersUnavailabilityDto } from './dto/create-oda-locations-orders-unavailability.dto';
import { UpdateOdaLocationsOrdersUnavailabilityDto } from './dto/update-oda-locations-orders-unavailability.dto';

@Injectable()
export class OdaLocationsOrdersUnavailabilitiesService {
  create(createOdaLocationsOrdersUnavailabilityDto: CreateOdaLocationsOrdersUnavailabilityDto) {
    return 'This action adds a new odaLocationsOrdersUnavailability';
  }

  findAll() {
    return `This action returns all odaLocationsOrdersUnavailabilities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaLocationsOrdersUnavailability`;
  }

  update(id: number, updateOdaLocationsOrdersUnavailabilityDto: UpdateOdaLocationsOrdersUnavailabilityDto) {
    return `This action updates a #${id} odaLocationsOrdersUnavailability`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaLocationsOrdersUnavailability`;
  }
}
