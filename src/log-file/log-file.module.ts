import { Module } from '@nestjs/common';
import { LogFileService } from './log-file.service';
import { LogFileController } from './log-file.controller';

@Module({
  controllers: [LogFileController],
  providers: [LogFileService],
})
export class LogFileModule {}
