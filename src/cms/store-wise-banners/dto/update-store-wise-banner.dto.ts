import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreWiseBannerDto } from './create-store-wise-banner.dto';

export class UpdateStoreWiseBannerDto extends PartialType(CreateStoreWiseBannerDto) {}
