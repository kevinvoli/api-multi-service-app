import { PartialType } from '@nestjs/mapped-types';
import { CreateCabBookingDto } from './create-cab-booking.dto';

export class UpdateCabBookingDto extends PartialType(CreateCabBookingDto) {}
