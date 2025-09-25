import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverSubscriptionDetailDto } from './create-driver-subscription-detail.dto';

export class UpdateDriverSubscriptionDetailDto extends PartialType(CreateDriverSubscriptionDetailDto) {}
