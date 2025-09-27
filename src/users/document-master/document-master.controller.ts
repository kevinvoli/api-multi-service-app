import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentMasterService } from './document-master.service';
import { CreateDocumentMasterDto } from './dto/create-document-master.dto';
import { UpdateDocumentMasterDto } from './dto/update-document-master.dto';

@Controller('document-master')
export class DocumentMasterController {
  constructor(private readonly documentMasterService: DocumentMasterService) {}

  @Post()
  async create(@Body() createDocumentMasterDto: CreateDocumentMasterDto) {
    return await this.documentMasterService.create(createDocumentMasterDto);
  }

  @Get()
  async findAll() {
    return await this.documentMasterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.documentMasterService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDocumentMasterDto: UpdateDocumentMasterDto) {
    return await this.documentMasterService.update(+id, updateDocumentMasterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.documentMasterService.remove(+id);
  }
}
