import { IsIn, IsOptional } from 'class-validator';

export class CancelCabBookingDto {
  @IsOptional()
  @IsIn(['Driver', 'Rider', 'Admin'])
  cancelBy?: 'Driver' | 'Rider' | 'Admin';
}
