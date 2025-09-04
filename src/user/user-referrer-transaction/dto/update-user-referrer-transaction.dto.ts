import { PartialType } from '@nestjs/mapped-types';
import { CreateUserReferrerTransactionDto } from './create-user-referrer-transaction.dto';

export class UpdateUserReferrerTransactionDto extends PartialType(CreateUserReferrerTransactionDto) {}
