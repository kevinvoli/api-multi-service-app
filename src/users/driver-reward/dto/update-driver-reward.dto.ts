import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverRewardDto } from './create-driver-reward.dto';

export class UpdateDriverRewardDto extends PartialType(CreateDriverRewardDto) {}
