import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateAppLaunchinfoDto {
  @IsString()
  @IsNotEmpty()
  tTitle: string;

  @IsString()
  @IsNotEmpty()
  tSubtitle: string;

  @IsString()
  @IsNotEmpty()
  vImage: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsNumber()
  iDisplayOrder: number;

  @IsEnum(['General', 'Driver', 'Company', 'Passenger'])
  @IsNotEmpty()
  eUserType: 'General' | 'Driver' | 'Company' | 'Passenger';

  @IsEnum(['No', 'Yes'])
  @IsNotEmpty()
  eForSmartLogin: 'No' | 'Yes';
}