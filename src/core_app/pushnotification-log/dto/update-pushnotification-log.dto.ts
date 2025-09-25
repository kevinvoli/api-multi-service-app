import { PartialType } from '@nestjs/mapped-types';
import { CreatePushnotificationLogDto } from './create-pushnotification-log.dto';

export class UpdatePushnotificationLogDto extends PartialType(CreatePushnotificationLogDto) {}
