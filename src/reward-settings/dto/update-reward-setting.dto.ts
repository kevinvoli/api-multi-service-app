import { PartialType } from '@nestjs/mapped-types';
import { CreateRewardSettingDto } from './create-reward-setting.dto';

export class UpdateRewardSettingDto extends PartialType(CreateRewardSettingDto) {}
