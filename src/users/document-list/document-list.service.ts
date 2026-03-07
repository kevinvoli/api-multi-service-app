import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentList } from './entities/document-list.entity';
import { CreateDocumentListDto } from './dto/create-document-list.dto';
import { UpdateDocumentListDto } from './dto/update-document-list.dto';

@Injectable()
export class DocumentListService {
  constructor(
    @InjectRepository(DocumentList)
    private readonly repository: Repository<DocumentList>,
  ) {}

  async create(createDto: CreateDocumentListDto): Promise<DocumentList> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DocumentList[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DocumentList> {
    const entity = await this.repository.findOneBy({ docId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDocumentListDto): Promise<DocumentList> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
