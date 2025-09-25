import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverSubscriptionPlanDto } from './create-driver-subscription-plan.dto';

export class UpdateDriverSubscriptionPlanDto extends PartialType(CreateDriverSubscriptionPlanDto) {}
