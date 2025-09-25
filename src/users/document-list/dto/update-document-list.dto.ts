import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentListDto } from './create-document-list.dto';

export class UpdateDocumentListDto extends PartialType(CreateDocumentListDto) {}
