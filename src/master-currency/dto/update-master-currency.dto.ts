import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterCurrencyDto } from './create-master-currency.dto';

export class UpdateMasterCurrencyDto extends PartialType(CreateMasterCurrencyDto) {}
