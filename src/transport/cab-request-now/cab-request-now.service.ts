import { Injectable } from '@nestjs/common';
import { CreateCabRequestNowDto } from './dto/create-cab-request-now.dto';
import { UpdateCabRequestNowDto } from './dto/update-cab-request-now.dto';

@Injectable()
export class CabRequestNowService {
  create(createCabRequestNowDto: CreateCabRequestNowDto) {
    return 'This action adds a new cabRequestNow';
  }

  findAll() {
    return `This action returns all cabRequestNow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cabRequestNow`;
  }

  update(id: number, updateCabRequestNowDto: UpdateCabRequestNowDto) {
    return `This action updates a #${id} cabRequestNow`;
  }

  remove(id: number) {
    return `This action removes a #${id} cabRequestNow`;
  }
}
