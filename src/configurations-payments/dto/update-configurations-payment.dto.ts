import { PartialType } from '@nestjs/mapped-types';
import { CreateConfigurationsPaymentDto } from './create-configurations-payment.dto';

export class UpdateConfigurationsPaymentDto extends PartialType(CreateConfigurationsPaymentDto) {}
