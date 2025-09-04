import { PartialType } from '@nestjs/mapped-types';
import { CreateMultiLevelReferralMasterDto } from './create-multi-level-referral-master.dto';

export class UpdateMultiLevelReferralMasterDto extends PartialType(CreateMultiLevelReferralMasterDto) {}
