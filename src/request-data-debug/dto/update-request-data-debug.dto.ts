import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDataDebugDto } from './create-request-data-debug.dto';

export class UpdateRequestDataDebugDto extends PartialType(CreateRequestDataDebugDto) {}
