import { PartialType } from '@nestjs/mapped-types';
import { CreateRestrictedNegativeAreaDto } from './create-restricted-negative-area.dto';

export class UpdateRestrictedNegativeAreaDto extends PartialType(CreateRestrictedNegativeAreaDto) {}
