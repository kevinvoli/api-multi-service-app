import { PartialType } from '@nestjs/mapped-types';
import { CreateWithdrawRequestDto } from './create-withdraw-request.dto';

export class UpdateWithdrawRequestDto extends PartialType(CreateWithdrawRequestDto) {}
