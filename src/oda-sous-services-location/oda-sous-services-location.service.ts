import { Injectable } from '@nestjs/common';
import { CreateOdaSousServicesLocationDto } from './dto/create-oda-sous-services-location.dto';
import { UpdateOdaSousServicesLocationDto } from './dto/update-oda-sous-services-location.dto';

@Injectable()
export class OdaSousServicesLocationService {
  create(createOdaSousServicesLocationDto: CreateOdaSousServicesLocationDto) {
    return 'This action adds a new odaSousServicesLocation';
  }

  findAll() {
    return `This action returns all odaSousServicesLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odaSousServicesLocation`;
  }

  update(id: number, updateOdaSousServicesLocationDto: UpdateOdaSousServicesLocationDto) {
    return `This action updates a #${id} odaSousServicesLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} odaSousServicesLocation`;
  }
}
