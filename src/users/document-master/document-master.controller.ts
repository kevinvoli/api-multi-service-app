import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentMasterService } from './document-master.service';
import { CreateDocumentMasterDto } from './dto/create-document-master.dto';
import { UpdateDocumentMasterDto } from './dto/update-document-master.dto';

@Controller('document-master')
export class DocumentMasterController {
  constructor(private readonly documentMasterService: DocumentMasterService) {}

  @Post()
  create(@Body() createDocumentMasterDto: CreateDocumentMasterDto) {
    return this.documentMasterService.create(createDocumentMasterDto);
  }

  @Get()
  findAll() {
    return this.documentMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentMasterDto: UpdateDocumentMasterDto) {
    return this.documentMasterService.update(+id, updateDocumentMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentMasterService.remove(+id);
  }
}
