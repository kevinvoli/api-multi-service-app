import { Module } from '@nestjs/common';
import { DocumentListService } from './document-list.service';
import { DocumentListController } from './document-list.controller';

@Module({
  controllers: [DocumentListController],
  providers: [DocumentListService],
})
export class DocumentListModule {}
