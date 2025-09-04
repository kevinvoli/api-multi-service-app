import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentModelUserLogDto } from './create-payment-model-user-log.dto';

export class UpdatePaymentModelUserLogDto extends PartialType(CreatePaymentModelUserLogDto) {}
