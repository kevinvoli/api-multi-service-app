import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateConfigurationsPaymentDto {
  @IsString()
  @IsNotEmpty()
  tDescription: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vName: string;

  @IsString()
  @IsNotEmpty()
  vValue: string;

  @IsInt()
  @IsNotEmpty()
  vOrder: number;

  @IsEnum([
    '',
    'General',
    'Ride',
    'Delivery',
    'Ride,Delivery',
    'UberX',
    'Ride,Delivery,UberX',
    'Ride-Delivery-UberX',
    'Multi-Delivery',
    'DeliverAll',
    'Kiosk',
    'Fly',
  ])
  @IsOptional()
  eFor:
    | ''
    | 'General'
    | 'Ride'
    | 'Delivery'
    | 'Ride,Delivery'
    | 'UberX'
    | 'Ride,Delivery,UberX'
    | 'Ride-Delivery-UberX'
    | 'Multi-Delivery'
    | 'DeliverAll'
    | 'Kiosk'
    | 'Fly';

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
    | 'Store Settings';

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive' | null;

  @IsString()
  @IsNotEmpty()
  tHelp: string;

  @IsEnum(['Text', 'Textarea', 'Select', 'Number', 'NumericRange', 'Checkbox'])
  @IsOptional()
  eInputType:
    | 'Text'
    | 'Textarea'
    | 'Select'
    | 'Number'
    | 'NumericRange'
    | 'Checkbox';

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
  @IsNotEmpty()
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

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  ePaymentMethodConfig: 'No' | 'Yes';
}