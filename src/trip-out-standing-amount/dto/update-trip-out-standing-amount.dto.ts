import { PartialType } from '@nestjs/mapped-types';
import { CreateTripOutStandingAmountDto } from './create-trip-out-standing-amount.dto';

export class UpdateTripOutStandingAmountDto extends PartialType(CreateTripOutStandingAmountDto) {}
