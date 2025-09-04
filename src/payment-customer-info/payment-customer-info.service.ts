import { Injectable } from '@nestjs/common';
import { CreatePaymentCustomerInfoDto } from './dto/create-payment-customer-info.dto';
import { UpdatePaymentCustomerInfoDto } from './dto/update-payment-customer-info.dto';

@Injectable()
export class PaymentCustomerInfoService {
  create(createPaymentCustomerInfoDto: CreatePaymentCustomerInfoDto) {
    return 'This action adds a new paymentCustomerInfo';
  }

  findAll() {
    return `This action returns all paymentCustomerInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentCustomerInfo`;
  }

  update(id: number, updatePaymentCustomerInfoDto: UpdatePaymentCustomerInfoDto) {
    return `This action updates a #${id} paymentCustomerInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentCustomerInfo`;
  }
}
