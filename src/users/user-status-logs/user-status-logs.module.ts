import { Module } from '@nestjs/common';
import { UserStatusLogs } from './entities/user-status-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStatusLogsService } from './user-status-logs.service';
import { UserStatusLogsController } from './user-status-logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserStatusLogs])],
  controllers: [UserStatusLogsController],
  providers: [UserStatusLogsService],
  exports: [TypeOrmModule.forFeature([UserStatusLogs])],
})
export class UserStatusLogsModule {}
