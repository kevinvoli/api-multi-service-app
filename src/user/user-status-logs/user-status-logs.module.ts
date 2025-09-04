import { Module } from '@nestjs/common';
import { UserStatusLogsService } from './user-status-logs.service';
import { UserStatusLogsController } from './user-status-logs.controller';

@Module({
  controllers: [UserStatusLogsController],
  providers: [UserStatusLogsService],
})
export class UserStatusLogsModule {}
