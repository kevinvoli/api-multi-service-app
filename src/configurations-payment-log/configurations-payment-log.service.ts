import { Injectable } from '@nestjs/common';
import { CreateConfigurationsPaymentLogDto } from './dto/create-configurations-payment-log.dto';
import { UpdateConfigurationsPaymentLogDto } from './dto/update-configurations-payment-log.dto';

@Injectable()
export class ConfigurationsPaymentLogService {
  create(createConfigurationsPaymentLogDto: CreateConfigurationsPaymentLogDto) {
    return 'This action adds a new configurationsPaymentLog';
  }

  findAll() {
    return `This action returns all configurationsPaymentLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configurationsPaymentLog`;
  }

  update(id: number, updateConfigurationsPaymentLogDto: UpdateConfigurationsPaymentLogDto) {
    return `This action updates a #${id} configurationsPaymentLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} configurationsPaymentLog`;
  }
}
