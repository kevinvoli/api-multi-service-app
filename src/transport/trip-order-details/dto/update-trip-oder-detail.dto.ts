import { PartialType } from '@nestjs/mapped-types';
import { CreateTripOderDetailDto } from './create-trip-oder-detail.dto';

export class UpdateTripOderDetailDto extends PartialType(CreateTripOderDetailDto) {}
