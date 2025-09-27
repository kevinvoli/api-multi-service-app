import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderRequestDto {
  @IsNumber()
  @IsNotEmpty()
  iOrderId: number;

  @IsString()
  @IsNotEmpty()
  vMsgCode: string;

  @IsEnum(['Pending', 'Accept'])
  @IsNotEmpty()
  eStatus: 'Pending' | 'Accept';

  @IsNumber()
  @IsNotEmpty()
  iDriverId: number;
}