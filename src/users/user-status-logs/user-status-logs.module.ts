import { Module } from '@nestjs/common';
import { UserStatusLogsService } from './user-status-logs.service';
import { UserStatusLogsController } from './user-status-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStatusLogs } from './entities/user-status-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserStatusLogs])],
  controllers: [UserStatusLogsController],
  providers: [UserStatusLogsService],
})
export class UserStatusLogsModule {}
