import { Injectable } from '@nestjs/common';
import { CreateMasterCurrencyDto } from './dto/create-master-currency.dto';
import { UpdateMasterCurrencyDto } from './dto/update-master-currency.dto';

@Injectable()
export class MasterCurrencyService {
  create(createMasterCurrencyDto: CreateMasterCurrencyDto) {
    return 'This action adds a new masterCurrency';
  }

  findAll() {
    return `This action returns all masterCurrency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterCurrency`;
  }

  update(id: number, updateMasterCurrencyDto: UpdateMasterCurrencyDto) {
    return `This action updates a #${id} masterCurrency`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterCurrency`;
  }
}
