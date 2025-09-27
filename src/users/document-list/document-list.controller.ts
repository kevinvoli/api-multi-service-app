import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentListService } from './document-list.service';
import { CreateDocumentListDto } from './dto/create-document-list.dto';
import { UpdateDocumentListDto } from './dto/update-document-list.dto';

@Controller('document-list')
export class DocumentListController {
  constructor(private readonly documentListService: DocumentListService) {}

  @Post()
  async create(@Body() createDocumentListDto: CreateDocumentListDto) {
    return await this.documentListService.create(createDocumentListDto);
  }

  @Get()
  async findAll() {
    return await this.documentListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.documentListService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDocumentListDto: UpdateDocumentListDto) {
    return await this.documentListService.update(+id, updateDocumentListDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.documentListService.remove(+id);
  }
}
