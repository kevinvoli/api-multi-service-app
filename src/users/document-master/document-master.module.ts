import { Module } from '@nestjs/common';
import { DocumentMaster } from './entities/document-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentMasterService } from './document-master.service';
import { DocumentMasterController } from './document-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentMaster])],
  controllers: [DocumentMasterController],
  providers: [DocumentMasterService],
  exports: [TypeOrmModule.forFeature([DocumentMaster])],
})
export class DocumentMasterModule {}
