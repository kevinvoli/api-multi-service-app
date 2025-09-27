import { IsString, IsNumber, IsEnum, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateLanguageLabelDto {
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
  @MaxLength(100)
  orgLabel: string;

  @IsNumber()
  @IsNotEmpty()
  iSheetSrNo: number;

  @IsString()
  @IsNotEmpty()
  vValue: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vScreen: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eScript: 'Yes' | 'No';

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive';

  @IsEnum(['APP', 'WEB'])
  @IsOptional()
  eDeviceType: 'APP' | 'WEB';

  @IsEnum([
    'General',
    'Ride',
    'Delivery',
    'Ride-Delivery',
    'UberX',
    'Multi-Delivery',
    'DeliverAll',
    'Kiosk',
    'Food',
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
    | 'Kiosk'
    | 'Food';

  @IsEnum([
    'General',
    'Ride',
    'Delivery',
    'UberX',
    'Ride-Delivery-UberX',
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
    | 'Ride-Delivery-UberX'
    | 'Multi-Delivery'
    | 'DeliverAll'
    | 'Kiosk'
    | 'Fly'
    | 'Food';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eProcessed: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eInProcess: 'Yes' | 'No';
}