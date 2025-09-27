import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  @IsNotEmpty()
  iOrderId: number;

  @IsNumber()
  @IsNotEmpty()
  iFoodMenuId: number;

  @IsNumber()
  @IsNotEmpty()
  iMenuItemId: number;

  @IsNumber()
  @IsNotEmpty()
  fPrice: number;

  @IsNumber()
  @IsNotEmpty()
  iQty: number;

  @IsNumber()
  @IsNotEmpty()
  fTotalPrice: number;
}