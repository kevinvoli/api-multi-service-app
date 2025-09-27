import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateAppScreenMasterDto {
  @IsString()
  @IsNotEmpty()
  vScreenName: string;

  @IsString()
  @IsNotEmpty()
  vScreenImage: string;

  @IsNumber()
  @IsNotEmpty()
  iParentId: number;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsEnum(['Ride', 'Delivery', 'UberX', 'Deliverall', 'General'])
  @IsNotEmpty()
  eAppType: 'Ride' | 'Delivery' | 'UberX' | 'Deliverall' | 'General';
}