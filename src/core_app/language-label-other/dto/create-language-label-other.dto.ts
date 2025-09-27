import { IsString, IsNumber, IsEnum, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateLanguageLabelOtherDto {
  @IsNumber()
  @IsNotEmpty()
  lPageId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  vCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vLabel: string;

  @IsString()
  @IsNotEmpty()
  vValue: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vScreen: string;

  @IsEnum(['APP', 'WEB'])
  @IsOptional()
  eDeviceType: 'APP' | 'WEB';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eScript: 'Yes' | 'No';

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive';

  @IsEnum([
    'General',
    'Ride',
    'Delivery',
    'Ride-Delivery',
    'UberX',
    'Multi-Delivery',
    'DeliverAll',
    'Kiosk',
  ])
  @IsOptional()
  eAppType:
    | 'General'
    | 'Ride'
    | 'Delivery'
    | 'Ride-Delivery'
    | 'UberX'
    | 'Multi-Delivery'
    | 'DeliverAll'
    | 'Kiosk';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eProcessed: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eInProcess: 'Yes' | 'No';

  @IsString()
  @IsNotEmpty()
  orgLabel: string;

  @IsNumber()
  @IsNotEmpty()
  iSheetSrNo: number;

  @IsEnum([
    'General',
    'Ride',
    'Delivery',
    'UberX',
    'Multi-Delivery',
    'DeliverAll',
    'Kiosk',
    'Fly',
    'Food',
  ])
  @IsOptional()
  eFor:
    | 'General'
    | 'Ride'
    | 'Delivery'
    | 'UberX'
    | 'Multi-Delivery'
    | 'DeliverAll'
    | 'Kiosk'
    | 'Fly'
    | 'Food';
}