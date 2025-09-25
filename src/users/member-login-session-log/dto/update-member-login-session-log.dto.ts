import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberLoginSessionLogDto } from './create-member-login-session-log.dto';

export class UpdateMemberLoginSessionLogDto extends PartialType(CreateMemberLoginSessionLogDto) {}
