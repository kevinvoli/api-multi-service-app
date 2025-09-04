import { Injectable } from '@nestjs/common';
import { CreateConfigurationsPaymentDto } from './dto/create-configurations-payment.dto';
import { UpdateConfigurationsPaymentDto } from './dto/update-configurations-payment.dto';

@Injectable()
export class ConfigurationsPaymentsService {
  create(createConfigurationsPaymentDto: CreateConfigurationsPaymentDto) {
    return 'This action adds a new configurationsPayment';
  }

  findAll() {
    return `This action returns all configurationsPayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configurationsPayment`;
  }

  update(id: number, updateConfigurationsPaymentDto: UpdateConfigurationsPaymentDto) {
    return `This action updates a #${id} configurationsPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} configurationsPayment`;
  }
}
