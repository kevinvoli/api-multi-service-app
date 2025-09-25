import { Injectable } from '@nestjs/common';
import { CreateAirportLocationMasterDto } from './dto/create-airport-location-master.dto';
import { UpdateAirportLocationMasterDto } from './dto/update-airport-location-master.dto';

@Injectable()
export class AirportLocationMastersService {
  create(createAirportLocationMasterDto: CreateAirportLocationMasterDto) {
    return 'This action adds a new airportLocationMaster';
  }

  findAll() {
    return `This action returns all airportLocationMasters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} airportLocationMaster`;
  }

  update(id: number, updateAirportLocationMasterDto: UpdateAirportLocationMasterDto) {
    return `This action updates a #${id} airportLocationMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} airportLocationMaster`;
  }
}
