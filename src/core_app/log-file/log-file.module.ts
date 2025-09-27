import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogFileService } from './log-file.service';
import { LogFileController } from './log-file.controller';
import { LogFile } from './entities/log-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogFile])],
  controllers: [LogFileController],
  providers: [LogFileService],
})
export class LogFileModule {}
