import { PartialType } from '@nestjs/mapped-types';
import { CreateTripTimeDto } from './create-trip-time.dto';

export class UpdateTripTimeDto extends PartialType(CreateTripTimeDto) {}
