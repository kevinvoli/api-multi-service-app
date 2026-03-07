import { Module } from '@nestjs/common';
import { RequestPostData } from './entities/request-post-datum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestPostDataService } from './request-post-data.service';
import { RequestPostDataController } from './request-post-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RequestPostData])],
  controllers: [RequestPostDataController],
  providers: [RequestPostDataService],
  exports: [TypeOrmModule.forFeature([RequestPostData])],
})
export class RequestPostDataModule {}
