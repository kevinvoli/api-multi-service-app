import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberLogDto } from './create-member-log.dto';

export class UpdateMemberLogDto extends PartialType(CreateMemberLogDto) {}
