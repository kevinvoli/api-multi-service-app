import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestPostDataService } from './request-post-data.service';
import { RequestPostDataController } from './request-post-data.controller';
import { RequestPostData } from './entities/request-post-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestPostData])],
  controllers: [RequestPostDataController],
  providers: [RequestPostDataService],
})
export class RequestPostDataModule {}
