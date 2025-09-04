import { Module } from '@nestjs/common';
import { MemberLoginSessionLogService } from './member-login-session-log.service';
import { MemberLoginSessionLogController } from './member-login-session-log.controller';

@Module({
  controllers: [MemberLoginSessionLogController],
  providers: [MemberLoginSessionLogService],
})
export class MemberLoginSessionLogModule {}
