import { Module } from '@nestjs/common';
import { DocumentListService } from './document-list.service';
import { DocumentListController } from './document-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentList } from './entities/document-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentList])],
  controllers: [DocumentListController],
  providers: [DocumentListService],
})
export class DocumentListModule {}
