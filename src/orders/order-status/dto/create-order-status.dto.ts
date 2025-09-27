import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  vStatusTrack: string;

  @IsString()
  @IsNotEmpty()
  vStatus: string;

  @IsNumber()
  @IsNotEmpty()
  iStatusCode: number;

  @IsNumber()
  @IsNotEmpty()
  iDisplayOrder: number;

  @IsString()
  @IsNotEmpty()
  vStatusEn: string;

  @IsString()
  @IsNotEmpty()
  vStatusFr: string;
}