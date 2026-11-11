import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCabBookingDto } from './create-cab-booking.dto';

export class UpdateCabBookingDto extends PartialType(
  OmitType(CreateCabBookingDto, [
    'vName',
    'vLastName',
    'vEmail',
    'vPhone',
    'vPhoneCode',
    'vCountry',
  ] as const),
) {}
