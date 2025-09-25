import { PartialType } from '@nestjs/mapped-types';
import { CreateUserStatusLogDto } from './create-user-status-log.dto';

export class UpdateUserStatusLogDto extends PartialType(CreateUserStatusLogDto) {}
