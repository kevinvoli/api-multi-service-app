import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestPostDatumDto } from './create-request-post-datum.dto';

export class UpdateRequestPostDatumDto extends PartialType(CreateRequestPostDatumDto) {}
