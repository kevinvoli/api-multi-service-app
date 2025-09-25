import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverRequestDto } from './create-driver-request.dto';

export class UpdateDriverRequestDto extends PartialType(CreateDriverRequestDto) {}
