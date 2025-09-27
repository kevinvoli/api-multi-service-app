import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateNewsfeedDto {
  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsString()
  @IsNotEmpty()
  vNewfeedImage: string;

  @IsString()
  @IsNotEmpty()
  tDescription: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive', 'Deleted'])
  eStatus?: 'Active' | 'Inactive' | 'Deleted';

  @IsOptional()
  @IsEnum(['News', 'Notification'])
  eType?: 'News' | 'Notification';

  @IsEnum(['driver', 'rider', 'company', 'all'])
  @IsNotEmpty()
  eUserType: 'driver' | 'rider' | 'company' | 'all';
}