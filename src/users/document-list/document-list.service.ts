import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentListDto } from './dto/create-document-list.dto';
import { UpdateDocumentListDto } from './dto/update-document-list.dto';
import { DocumentList } from './entities/document-list.entity';

@Injectable()
export class DocumentListService {
  constructor(
    @InjectRepository(DocumentList)
    private readonly documentListRepository: Repository<DocumentList>,
  ) {}
  async create(createDocumentListDto: CreateDocumentListDto): Promise<DocumentList> {
    const newDoc = this.documentListRepository.create(createDocumentListDto);
    return await this.documentListRepository.save(newDoc);
  }

  async findAll(): Promise<DocumentList[]> {
    return await this.documentListRepository.find();
  }

  async findOne(id: number): Promise<DocumentList> {
    const doc = await this.documentListRepository.findOne({ where: { docId: id } });
    if (!doc) {
      throw new NotFoundException(`Document with ID "${id}" not found`);
    }
    return doc;
  }

  async update(id: number, updateDocumentListDto: UpdateDocumentListDto): Promise<DocumentList> {
    const doc = await this.documentListRepository.preload({
      docId: id,
      ...updateDocumentListDto,
    });
    if (!doc) {
      throw new NotFoundException(`Document with ID "${id}" not found`);
    }
    return this.documentListRepository.save(doc);
  }

  async remove(id: number): Promise<DocumentList> {
    const doc = await this.findOne(id);
    doc.status = 'Deleted';
    return await this.documentListRepository.save(doc);
  }
}
