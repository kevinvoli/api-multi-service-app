import { Injectable } from '@nestjs/common';
import { CreatePaymentModelUserLogDto } from './dto/create-payment-model-user-log.dto';
import { UpdatePaymentModelUserLogDto } from './dto/update-payment-model-user-log.dto';

@Injectable()
export class PaymentModelUserLogService {
  create(createPaymentModelUserLogDto: CreatePaymentModelUserLogDto) {
    return 'This action adds a new paymentModelUserLog';
  }

  findAll() {
    return `This action returns all paymentModelUserLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentModelUserLog`;
  }

  update(id: number, updatePaymentModelUserLogDto: UpdatePaymentModelUserLogDto) {
    return `This action updates a #${id} paymentModelUserLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentModelUserLog`;
  }
}
