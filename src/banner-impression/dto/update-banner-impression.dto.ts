import { PartialType } from '@nestjs/mapped-types';
import { CreateBannerImpressionDto } from './create-banner-impression.dto';

export class UpdateBannerImpressionDto extends PartialType(CreateBannerImpressionDto) {}
