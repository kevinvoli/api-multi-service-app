import { Injectable } from '@nestjs/common';
import { CreateAirportsurchargeFareDto } from './dto/create-airportsurcharge-fare.dto';
import { UpdateAirportsurchargeFareDto } from './dto/update-airportsurcharge-fare.dto';

@Injectable()
export class AirportsurchargeFareService {
  create(createAirportsurchargeFareDto: CreateAirportsurchargeFareDto) {
    return 'This action adds a new airportsurchargeFare';
  }

  findAll() {
    return `This action returns all airportsurchargeFare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} airportsurchargeFare`;
  }

  update(id: number, updateAirportsurchargeFareDto: UpdateAirportsurchargeFareDto) {
    return `This action updates a #${id} airportsurchargeFare`;
  }

  remove(id: number) {
    return `This action removes a #${id} airportsurchargeFare`;
  }
}
