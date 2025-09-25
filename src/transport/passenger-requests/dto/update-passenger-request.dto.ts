import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengerRequestDto } from './create-passenger-request.dto';

export class UpdatePassengerRequestDto extends PartialType(CreatePassengerRequestDto) {}
