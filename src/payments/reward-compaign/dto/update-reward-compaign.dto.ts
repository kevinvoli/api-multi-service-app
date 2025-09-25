import { PartialType } from '@nestjs/mapped-types';
import { CreateRewardCompaignDto } from './create-reward-compaign.dto';

export class UpdateRewardCompaignDto extends PartialType(CreateRewardCompaignDto) {}
