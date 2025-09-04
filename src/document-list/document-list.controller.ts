import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentListService } from './document-list.service';
import { CreateDocumentListDto } from './dto/create-document-list.dto';
import { UpdateDocumentListDto } from './dto/update-document-list.dto';

@Controller('document-list')
export class DocumentListController {
  constructor(private readonly documentListService: DocumentListService) {}

  @Post()
  create(@Body() createDocumentListDto: CreateDocumentListDto) {
    return this.documentListService.create(createDocumentListDto);
  }

  @Get()
  findAll() {
    return this.documentListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentListDto: UpdateDocumentListDto) {
    return this.documentListService.update(+id, updateDocumentListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentListService.remove(+id);
  }
}
