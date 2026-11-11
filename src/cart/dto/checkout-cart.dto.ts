import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { CoordinateString } from '../../common/decorators/coordinate-string.decorator';

export class CheckoutCartDto {
  @IsInt()
  iUserId: number;

  @IsInt()
  iUserAddressId: number;

  @IsOptional()
  @IsString()
  ePaymentOption?: string; // 'Cash' | 'Card' | 'Wallet', défaut: 'Cash'

  @IsOptional()
  @IsString()
  vCouponCode?: string;

  @IsOptional()
  @IsString()
  vInstruction?: string;

  @IsOptional()
  @IsIn(['Yes', 'No'])
  eTakeAway?: string; // défaut: 'No'

  @IsOptional()
  @IsIn(['Yes', 'No'])
  eCheckUserWallet?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  fTipAmount?: number;

  @IsOptional()
  @IsInt()
  iServiceId?: number; // défaut: 1

  @IsOptional()
  @IsIn(['User', 'Admin', 'Store'])
  eOrderplacedBy?: string; // défaut: 'User'

  /** Latitude de livraison (pour calcul frais de livraison) */
  @IsOptional()
  @CoordinateString()
  vDeliveryLat?: string;

  /** Longitude de livraison */
  @IsOptional()
  @CoordinateString()
  vDeliveryLon?: string;
}
