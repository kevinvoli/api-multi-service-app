import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushnotificationLogService } from './pushnotification-log.service';
import { PushnotificationLogController } from './pushnotification-log.controller';
import { PushnotificationLog } from './entities/pushnotification-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PushnotificationLog])],
  controllers: [PushnotificationLogController],
  providers: [PushnotificationLogService],
})
export class PushnotificationLogModule {}
