import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateRewardSettingDto {
  @IsString()
  @IsNotEmpty()
  vLevel: string;

  @IsInt()
  @IsNotEmpty()
  vMinimumTrips: number;

  @IsNumber()
  @IsOptional()
  fRatings: number;

  @IsInt()
  @IsNotEmpty()
  iAcceptanceRate: number;

  @IsInt()
  @IsNotEmpty()
  iCancellationRate: number;

  @IsInt()
  @IsNotEmpty()
  iDuration: number;

  @IsNumber()
  @IsOptional()
  fCredit: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vImage: string;

  @IsInt()
  @IsNotEmpty()
  eRewardLevel: number;
}