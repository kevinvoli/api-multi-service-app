import { PartialType } from '@nestjs/mapped-types';
import { CreateTripMessageDto } from './create-trip-message.dto';

export class UpdateTripMessageDto extends PartialType(CreateTripMessageDto) {}
