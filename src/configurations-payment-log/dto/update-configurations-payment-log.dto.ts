import { PartialType } from '@nestjs/mapped-types';
import { CreateConfigurationsPaymentLogDto } from './create-configurations-payment-log.dto';

export class UpdateConfigurationsPaymentLogDto extends PartialType(CreateConfigurationsPaymentLogDto) {}
