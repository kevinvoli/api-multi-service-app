import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CoordinateString } from '../../../common/decorators/coordinate-string.decorator';

export class AddAddressDto {
  @IsInt()
  iUserId: number;

  @IsString()
  @IsNotEmpty()
  vServiceAddress: string;

  @IsString()
  vBuildingNo: string;

  @IsOptional()
  @IsString()
  vLandmark?: string;

  /** 'Home' | 'Work' | 'Other' */
  @IsOptional()
  @IsString()
  vAddressType?: string;

  @CoordinateString()
  vLatitude: string;

  @CoordinateString()
  vLongitude: string;

  @IsOptional()
  @IsString()
  vTimeZone?: string;
}
