import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDestinationDto } from './create-driver-destination.dto';

export class UpdateDriverDestinationDto extends PartialType(CreateDriverDestinationDto) {}
