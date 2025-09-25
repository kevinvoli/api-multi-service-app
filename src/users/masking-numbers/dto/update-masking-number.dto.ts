import { PartialType } from '@nestjs/mapped-types';
import { CreateMaskingNumberDto } from './create-masking-number.dto';

export class UpdateMaskingNumberDto extends PartialType(CreateMaskingNumberDto) {}
