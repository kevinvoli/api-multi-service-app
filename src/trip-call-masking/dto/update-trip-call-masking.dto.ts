import { PartialType } from '@nestjs/mapped-types';
import { CreateTripCallMaskingDto } from './create-trip-call-masking.dto';

export class UpdateTripCallMaskingDto extends PartialType(CreateTripCallMaskingDto) {}
