import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentMasterDto } from './dto/create-document-master.dto';
import { UpdateDocumentMasterDto } from './dto/update-document-master.dto';
import { DocumentMaster } from './entities/document-master.entity';

@Injectable()
export class DocumentMasterService {
  constructor(
    @InjectRepository(DocumentMaster)
    private readonly documentMasterRepository: Repository<DocumentMaster>,
  ) {}
  async create(createDocumentMasterDto: CreateDocumentMasterDto) {
    const newDocMaster = this.documentMasterRepository.create(createDocumentMasterDto);
    return await this.documentMasterRepository.save(newDocMaster);
  }

  async findAll(): Promise<DocumentMaster[]> {
    return await this.documentMasterRepository.find();
  }

  async findOne(id: number): Promise<DocumentMaster> {
    const docMaster = await this.documentMasterRepository.findOne({ where: { docMasterid: id } });
    if (!docMaster) {
      throw new NotFoundException(`Document master with ID "${id}" not found`);
    }
    return docMaster;
  }

  async update(id: number, updateDocumentMasterDto: UpdateDocumentMasterDto): Promise<DocumentMaster> {
    const docMaster = await this.documentMasterRepository.preload({
      docMasterid: id,
      ...updateDocumentMasterDto,
    });
    if (!docMaster) {
      throw new NotFoundException(`Document master with ID "${id}" not found`);
    }
    return this.documentMasterRepository.save(docMaster);
  }

  async remove(id: number): Promise<DocumentMaster> {
    const docMaster = await this.findOne(id);
    docMaster.status = 'Deleted';
    return await this.documentMasterRepository.save(docMaster);
  }
}
