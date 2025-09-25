import { Module } from '@nestjs/common';
import { MemberLogsService } from './member-logs.service';
import { MemberLogsController } from './member-logs.controller';

@Module({
  controllers: [MemberLogsController],
  providers: [MemberLogsService],
})
export class MemberLogsModule {}
