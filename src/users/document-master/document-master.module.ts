import { Module } from '@nestjs/common';
import { DocumentMasterService } from './document-master.service';
import { DocumentMasterController } from './document-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentMaster } from './entities/document-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentMaster])],
  controllers: [DocumentMasterController],
  providers: [DocumentMasterService],
})
export class DocumentMasterModule {}
