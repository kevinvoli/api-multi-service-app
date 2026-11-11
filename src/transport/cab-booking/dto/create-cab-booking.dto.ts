import {
  IsDateString,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { CoordinateString } from '../../../common/decorators/coordinate-string.decorator';

export class CreateCabBookingDto {
  // Passager (existant ou nouveau)
  @IsOptional()
  @IsInt()
  iUserId?: number;

  @IsOptional()
  @IsString()
  vName?: string;

  @IsOptional()
  @IsString()
  vLastName?: string;

  @IsOptional()
  @IsEmail()
  vEmail?: string;

  @IsOptional()
  @IsString()
  vPhone?: string;

  @IsOptional()
  @IsString()
  vPhoneCode?: string;

  @IsOptional()
  @IsString()
  vCountry?: string;

  // Trajet
  @CoordinateString()
  vSourceLatitude: string;

  @CoordinateString()
  vSourceLongitude: string;

  @CoordinateString()
  vDestLatitude: string;

  @CoordinateString()
  vDestLongitude: string;

  @IsString()
  @IsNotEmpty()
  vSourceAddresss: string;

  @IsString()
  tDestAddress: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  vDistance?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  vDuration?: number;

  // Réservation
  @IsOptional()
  @IsInt()
  iDriverId?: number;

  @IsInt()
  iVehicleTypeId: number;

  @IsOptional()
  @IsInt()
  iCompanyId?: number;

  @IsOptional()
  @IsDateString()
  dBookingDate?: string;

  @IsOptional()
  @IsIn(['Yes', 'No'])
  eAutoAssign?: 'Yes' | 'No';

  @IsOptional()
  @IsString()
  eBookingFrom?: string;

  @IsOptional()
  @IsIn(['Yes', 'No'])
  eFemaleDriverRequest?: 'Yes' | 'No';

  @IsOptional()
  @IsIn(['Yes', 'No'])
  eHandiCapAccessibility?: 'Yes' | 'No';

  @IsOptional()
  @IsIn(['Ride', 'Deliver', 'UberX', 'Multi-Delivery'])
  eType?: 'Ride' | 'Deliver' | 'UberX' | 'Multi-Delivery';
}
