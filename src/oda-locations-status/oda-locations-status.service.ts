import { Injectable } from '@nestjs/common';
import { CreateOdaLocationsStatusDto } from './dto/create-oda-locations-status.dto';
import { UpdateOdaLocationsStatusDto } from './dto/update-oda-locations-status.dto';

@Injectable()
export class OdaLocationsStatusService {
  create(createOdaLocationsStatusDto: CreateOdaLocationsStatusDto) {
    return 'This action adds a new odaLocationsStatus';
  }

  findAll() {
    return `This action returns all odaLocationsStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaLocationsStatus`;
  }

  update(id: number, updateOdaLocationsStatusDto: UpdateOdaLocationsStatusDto) {
    return `This action updates a #${id} odaLocationsStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaLocationsStatus`;
  }
}
