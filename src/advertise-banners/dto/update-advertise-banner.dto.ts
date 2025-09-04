import { PartialType } from '@nestjs/mapped-types';
import { CreateAdvertiseBannerDto } from './create-advertise-banner.dto';

export class UpdateAdvertiseBannerDto extends PartialType(CreateAdvertiseBannerDto) {}
