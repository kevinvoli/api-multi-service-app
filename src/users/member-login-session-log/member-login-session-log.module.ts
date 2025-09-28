import { Module } from '@nestjs/common';
import { MemberLoginSessionLogService } from './member-login-session-log.service';
import { MemberLoginSessionLogController } from './member-login-session-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberLoginSessionLog } from './entities/member-login-session-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberLoginSessionLog])],
  controllers: [MemberLoginSessionLogController],
  providers: [MemberLoginSessionLogService],
})
export class MemberLoginSessionLogModule {}
