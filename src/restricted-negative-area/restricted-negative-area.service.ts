import { Injectable } from '@nestjs/common';
import { CreateRestrictedNegativeAreaDto } from './dto/create-restricted-negative-area.dto';
import { UpdateRestrictedNegativeAreaDto } from './dto/update-restricted-negative-area.dto';

@Injectable()
export class RestrictedNegativeAreaService {
  create(createRestrictedNegativeAreaDto: CreateRestrictedNegativeAreaDto) {
    return 'This action adds a new restrictedNegativeArea';
  }

  findAll() {
    return `This action returns all restrictedNegativeArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restrictedNegativeArea`;
  }

  update(id: number, updateRestrictedNegativeAreaDto: UpdateRestrictedNegativeAreaDto) {
    return `This action updates a #${id} restrictedNegativeArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} restrictedNegativeArea`;
  }
}
