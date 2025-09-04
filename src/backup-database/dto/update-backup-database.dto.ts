import { PartialType } from '@nestjs/mapped-types';
import { CreateBackupDatabaseDto } from './create-backup-database.dto';

export class UpdateBackupDatabaseDto extends PartialType(CreateBackupDatabaseDto) {}
