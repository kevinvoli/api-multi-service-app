import { IsNotEmpty, IsNumber, IsString, IsIP } from 'class-validator';

export class CreateOrderStatusLogDto {
  @IsNumber()
  @IsNotEmpty()
  iOrderId: number;

  @IsNumber()
  @IsNotEmpty()
  iStatusCode: number;

  @IsIP()
  @IsNotEmpty()
  vIp: string;
}