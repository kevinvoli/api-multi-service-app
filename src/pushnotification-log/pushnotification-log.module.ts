import { Module } from '@nestjs/common';
import { PushnotificationLogService } from './pushnotification-log.service';
import { PushnotificationLogController } from './pushnotification-log.controller';

@Module({
  controllers: [PushnotificationLogController],
  providers: [PushnotificationLogService],
})
export class PushnotificationLogModule {}
