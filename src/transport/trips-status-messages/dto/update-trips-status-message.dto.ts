import { PartialType } from '@nestjs/mapped-types';
import { CreateTripsStatusMessageDto } from './create-trips-status-message.dto';

export class UpdateTripsStatusMessageDto extends PartialType(CreateTripsStatusMessageDto) {}
