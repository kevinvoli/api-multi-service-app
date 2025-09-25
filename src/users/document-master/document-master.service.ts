import { Injectable } from '@nestjs/common';
import { CreateDocumentMasterDto } from './dto/create-document-master.dto';
import { UpdateDocumentMasterDto } from './dto/update-document-master.dto';

@Injectable()
export class DocumentMasterService {
  create(createDocumentMasterDto: CreateDocumentMasterDto) {
    return 'This action adds a new documentMaster';
  }

  findAll() {
    return `This action returns all documentMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentMaster`;
  }

  update(id: number, updateDocumentMasterDto: UpdateDocumentMasterDto) {
    return `This action updates a #${id} documentMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentMaster`;
  }
}
