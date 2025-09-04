import { PartialType } from '@nestjs/mapped-types';
import { CreateAllDatabaseDetailDto } from './create-all-database-detail.dto';

export class UpdateAllDatabaseDetailDto extends PartialType(CreateAllDatabaseDetailDto) {}
