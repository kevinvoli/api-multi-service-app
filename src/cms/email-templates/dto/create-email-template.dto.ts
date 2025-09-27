import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateEmailTemplateDto {
  @IsString()
  @IsNotEmpty()
  vEmailCode: string;

  @IsString()
  @IsNotEmpty()
  vPurpose: string;

  @IsOptional()
  @IsEnum(['html', 'text'])
  eMime?: 'html' | 'text';

  @IsOptional()
  @IsEnum(['Job Seeker', 'Artist', 'Franchisee', 'Employer'])
  vSection?: 'Job Seeker' | 'Artist' | 'Franchisee' | 'Employer';

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsOptional()
  @IsString()
  vSubjectEn?: string;

  @IsString()
  @IsNotEmpty()
  vSubjectFr: string;

  @IsString()
  @IsNotEmpty()
  vBodyEn: string;

  @IsString()
  @IsNotEmpty()
  vBodyFr: string;

  @IsOptional()
  @IsEnum(['General', 'DeliverAll'])
  eSystem?: 'General' | 'DeliverAll';

  @IsOptional()
  @IsEnum([
    'General',
    'Ride',
    'Delivery',
    'Ride,Delivery',
    'UberX',
    'food',
    'DeliverAll',
    'Ride,Delivery,UberX',
  ])
  eFor?:
    | 'General'
    | 'Ride'
    | 'Delivery'
    | 'Ride,Delivery'
    | 'UberX'
    | 'food'
    | 'DeliverAll'
    | 'Ride,Delivery,UberX';
}