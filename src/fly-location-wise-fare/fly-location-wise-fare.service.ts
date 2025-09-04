import { Injectable } from '@nestjs/common';
import { CreateFlyLocationWiseFareDto } from './dto/create-fly-location-wise-fare.dto';
import { UpdateFlyLocationWiseFareDto } from './dto/update-fly-location-wise-fare.dto';

@Injectable()
export class FlyLocationWiseFareService {
  create(createFlyLocationWiseFareDto: CreateFlyLocationWiseFareDto) {
    return 'This action adds a new flyLocationWiseFare';
  }

  findAll() {
    return `This action returns all flyLocationWiseFare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flyLocationWiseFare`;
  }

  update(id: number, updateFlyLocationWiseFareDto: UpdateFlyLocationWiseFareDto) {
    return `This action updates a #${id} flyLocationWiseFare`;
  }

  remove(id: number) {
    return `This action removes a #${id} flyLocationWiseFare`;
  }
}
