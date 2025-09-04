import { PartialType } from '@nestjs/mapped-types';
import { CreateTripReasonDto } from './create-trip-reason.dto';

export class UpdateTripReasonDto extends PartialType(CreateTripReasonDto) {}
