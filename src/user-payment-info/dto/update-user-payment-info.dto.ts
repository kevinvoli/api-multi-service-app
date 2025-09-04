import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPaymentInfoDto } from './create-user-payment-info.dto';

export class UpdateUserPaymentInfoDto extends PartialType(CreateUserPaymentInfoDto) {}
