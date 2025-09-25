import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentCustomerInfoDto } from './create-payment-customer-info.dto';

export class UpdatePaymentCustomerInfoDto extends PartialType(CreatePaymentCustomerInfoDto) {}
