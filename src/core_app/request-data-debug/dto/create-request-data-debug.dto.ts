import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateRequestDataDebugDto {
  @IsString()
  @IsNotEmpty()
  tTitle: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  tType: string;

  @IsString()
  @IsNotEmpty()
  tDescription: string;

  @IsString()
  @IsNotEmpty()
  tPurpose: string;

  @IsString()
  @IsNotEmpty()
  tCallToAction: string;

  @IsString()
  @IsNotEmpty()
  tRequestParam: string;

  @IsString()
  @IsOptional()
  tResponse?: string;

  @IsString()
  @IsOptional()
  tErrorResponse?: string;
}