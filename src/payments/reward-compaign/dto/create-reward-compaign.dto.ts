import { IsString, IsNotEmpty, IsEnum, IsDateString, IsOptional } from 'class-validator';

export class CreateRewardCompaignDto {
  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsDateString()
  @IsNotEmpty()
  dStartDate: string;

  @IsDateString()
  @IsNotEmpty()
  dEndDate: string;

  @IsEnum(['Active', 'Inactive', 'Cancelled', 'Expired', 'Deleted'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive' | 'Cancelled' | 'Expired' | 'Deleted';

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eCurrentActive: 'No' | 'Yes';
}