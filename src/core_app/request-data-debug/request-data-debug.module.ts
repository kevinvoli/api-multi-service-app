import { Module } from '@nestjs/common';
import { RequestDataDebugService } from './request-data-debug.service';
import { RequestDataDebugController } from './request-data-debug.controller';

@Module({
  controllers: [RequestDataDebugController],
  providers: [RequestDataDebugService],
})
export class RequestDataDebugModule {}
