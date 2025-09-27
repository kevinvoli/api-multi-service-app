import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDriverLogDto {
  @IsNumber()
  @IsNotEmpty()
  iOrderId: number;

  @IsNumber()
  @IsNotEmpty()
  iDriverId: number;

  @IsString()
  @IsNotEmpty()
  vMessage: string;
}