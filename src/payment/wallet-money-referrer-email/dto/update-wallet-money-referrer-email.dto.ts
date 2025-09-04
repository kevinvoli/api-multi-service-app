import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletMoneyReferrerEmailDto } from './create-wallet-money-referrer-email.dto';

export class UpdateWalletMoneyReferrerEmailDto extends PartialType(CreateWalletMoneyReferrerEmailDto) {}
