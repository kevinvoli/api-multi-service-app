import { IsString, IsNumber, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateCancelReasonDto {
  @IsNumber()
  @IsNotEmpty()
  iDisplayOrder: number;

  @IsNumber()
  @IsNotEmpty()
  iSortId: number;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsNotEmpty()
  eStatus: 'Active' | 'Inactive' | 'Deleted';

  @IsEnum(['Yes', 'No'])
  @IsNotEmpty()
  eAllowedCharge: 'Yes' | 'No';

  @IsString()
  @IsNotEmpty()
  vTitleEn: string;

  @IsString()
  @IsNotEmpty()
  vTitleFr: string;

  @IsEnum(['Ride', 'Deliver', 'UberX', 'DeliverAll', 'Bidding'])
  @IsNotEmpty()
  eType: 'Ride' | 'Deliver' | 'UberX' | 'DeliverAll' | 'Bidding';

  @IsEnum(['General', 'Passenger', 'Driver', 'Company'])
  @IsNotEmpty()
  eFor: 'General' | 'Passenger' | 'Driver' | 'Company';

  @IsEnum(['1', '0'])
  @IsNotEmpty()
  eFly: '1' | '0';
}