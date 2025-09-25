import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanPurchaseMasterDto } from './create-plan-purchase-master.dto';

export class UpdatePlanPurchaseMasterDto extends PartialType(CreatePlanPurchaseMasterDto) {}
