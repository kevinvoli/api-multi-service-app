import { Injectable } from '@nestjs/common';
import { CreateLocationWiseFareDto } from './dto/create-location-wise-fare.dto';
import { UpdateLocationWiseFareDto } from './dto/update-location-wise-fare.dto';

@Injectable()
export class LocationWiseFareService {
  create(createLocationWiseFareDto: CreateLocationWiseFareDto) {
    return 'This action adds a new locationWiseFare';
  }

  findAll() {
    return `This action returns all locationWiseFare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationWiseFare`;
  }

  update(id: number, updateLocationWiseFareDto: UpdateLocationWiseFareDto) {
    return `This action updates a #${id} locationWiseFare`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationWiseFare`;
  }
}
