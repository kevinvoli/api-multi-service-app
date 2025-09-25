import { PartialType } from '@nestjs/mapped-types';
import { CreateDataStorageEngineDto } from './create-data-storage-engine.dto';

export class UpdateDataStorageEngineDto extends PartialType(CreateDataStorageEngineDto) {}
