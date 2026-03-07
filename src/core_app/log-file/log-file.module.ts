import { Module } from '@nestjs/common';
import { LogFile } from './entities/log-file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogFileService } from './log-file.service';
import { LogFileController } from './log-file.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LogFile])],
  controllers: [LogFileController],
  providers: [LogFileService],
  exports: [TypeOrmModule.forFeature([LogFile])],
})
export class LogFileModule {}
