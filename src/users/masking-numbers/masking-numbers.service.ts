import { Injectable } from '@nestjs/common';
import { CreateMaskingNumberDto } from './dto/create-masking-number.dto';
import { UpdateMaskingNumberDto } from './dto/update-masking-number.dto';

@Injectable()
export class MaskingNumbersService {
  create(createMaskingNumberDto: CreateMaskingNumberDto) {
    return 'This action adds a new maskingNumber';
  }

  findAll() {
    return `This action returns all maskingNumbers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maskingNumber`;
  }

  update(id: number, updateMaskingNumberDto: UpdateMaskingNumberDto) {
    return `This action updates a #${id} maskingNumber`;
  }

  remove(id: number) {
    return `This action removes a #${id} maskingNumber`;
  }
}
