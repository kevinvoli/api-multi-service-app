import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateConfigurationDto {
  @IsString()
  @IsOptional()
  tDescription: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vName: string;

  @IsString()
  @IsNotEmpty()
  vValue: string;

  @IsNumber()
  @IsNotEmpty()
  vOrder: number;

  @IsEnum([
    '',
    'General',
    'Ride',
    'Delivery',
    'UberX',
    'Multi-Delivery',
    'DeliverAll',
    'Kiosk',
    'Fly',
    'Bidding',
  ])
  @IsOptional()
  eFor:
    | ''
    | 'General'
    | 'Ride'
    | 'Delivery'
    | 'UberX'
    | 'Multi-Delivery'
    | 'DeliverAll'
    | 'Kiosk'
    | 'Fly'
    | 'Bidding';

  @IsEnum([
    'General',
    'Email',
    'Apperance',
    'Prices',
    'Paypal',
    'Meta',
    'SMS',
    'Payment',
    'Social Media',
    'App Settings',
    'Installation Settings',
    'Store Settings',
    'Blocked',
    'Ride Share Settings',
  ])
  @IsOptional()
  eType:
    | 'General'
    | 'Email'
    | 'Apperance'
    | 'Prices'
    | 'Paypal'
    | 'Meta'
    | 'SMS'
    | 'Payment'
    | 'Social Media'
    | 'App Settings'
    | 'Installation Settings'
    | 'Store Settings'
    | 'Blocked'
    | 'Ride Share Settings';

  @IsEnum(['Active', 'Inactive'])
  @IsNotEmpty()
  eStatus: 'Active' | 'Inactive';

  @IsString()
  @IsOptional()
  tHelp: string;

  @IsEnum(['Text', 'Textarea', 'Select', 'Number', 'NumericRange', 'Time'])
  @IsOptional()
  eInputType:
    | 'Text'
    | 'Textarea'
    | 'Select'
    | 'Number'
    | 'NumericRange'
    | 'Time';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eZeroAllowed: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eSpaceAllowed: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eDoubleValueAllowed: 'Yes' | 'No';

  @IsString()
  @IsOptional()
  tSelectVal: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eAdminDisplay: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eRequireField: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eConfigRequired: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eSensitive: 'Yes' | 'No';

  @IsNumber()
  @IsOptional()
  iMaxVal: number;
}