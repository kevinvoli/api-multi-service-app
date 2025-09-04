import { Injectable } from '@nestjs/common';
import { CreateDocumentListDto } from './dto/create-document-list.dto';
import { UpdateDocumentListDto } from './dto/update-document-list.dto';

@Injectable()
export class DocumentListService {
  create(createDocumentListDto: CreateDocumentListDto) {
    return 'This action adds a new documentList';
  }

  findAll() {
    return `This action returns all documentList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentList`;
  }

  update(id: number, updateDocumentListDto: UpdateDocumentListDto) {
    return `This action updates a #${id} documentList`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentList`;
  }
}
