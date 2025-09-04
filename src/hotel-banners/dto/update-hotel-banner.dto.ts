import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelBannerDto } from './create-hotel-banner.dto';

export class UpdateHotelBannerDto extends PartialType(CreateHotelBannerDto) {}
