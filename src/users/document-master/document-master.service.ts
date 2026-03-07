import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentMaster } from './entities/document-master.entity';
import { CreateDocumentMasterDto } from './dto/create-document-master.dto';
import { UpdateDocumentMasterDto } from './dto/update-document-master.dto';

@Injectable()
export class DocumentMasterService {
  constructor(
    @InjectRepository(DocumentMaster)
    private readonly repository: Repository<DocumentMaster>,
  ) {}

  async create(createDto: CreateDocumentMasterDto): Promise<DocumentMaster> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DocumentMaster[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DocumentMaster> {
    const entity = await this.repository.findOneBy({ docMasterid: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDocumentMasterDto): Promise<DocumentMaster> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
