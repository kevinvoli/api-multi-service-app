import { Module } from '@nestjs/common';
import { RequestPostDataService } from './request-post-data.service';
import { RequestPostDataController } from './request-post-data.controller';

@Module({
  controllers: [RequestPostDataController],
  providers: [RequestPostDataService],
})
export class RequestPostDataModule {}
