import { Module } from '@nestjs/common';
import { PushnotificationLog } from './entities/pushnotification-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushnotificationLogService } from './pushnotification-log.service';
import { PushnotificationLogController } from './pushnotification-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushnotificationLog])],
  controllers: [PushnotificationLogController],
  providers: [PushnotificationLogService],
  exports: [TypeOrmModule.forFeature([PushnotificationLog])],
})
export class PushnotificationLogModule {}
