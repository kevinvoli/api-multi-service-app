import { PartialType } from '@nestjs/mapped-types';
import { CreateTripHelpDetailDto } from './create-trip-help-detail.dto';

export class UpdateTripHelpDetailDto extends PartialType(CreateTripHelpDetailDto) {}
