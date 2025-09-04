import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentMasterDto } from './create-document-master.dto';

export class UpdateDocumentMasterDto extends PartialType(CreateDocumentMasterDto) {}
