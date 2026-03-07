import { Module } from '@nestjs/common';
import { DocumentList } from './entities/document-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentListService } from './document-list.service';
import { DocumentListController } from './document-list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentList])],
  controllers: [DocumentListController],
  providers: [DocumentListService],
  exports: [TypeOrmModule.forFeature([DocumentList])],
})
export class DocumentListModule {}
