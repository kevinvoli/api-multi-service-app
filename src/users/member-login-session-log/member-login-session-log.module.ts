import { Module } from '@nestjs/common';
import { MemberLoginSessionLog } from './entities/member-login-session-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberLoginSessionLogService } from './member-login-session-log.service';
import { MemberLoginSessionLogController } from './member-login-session-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MemberLoginSessionLog])],
  controllers: [MemberLoginSessionLogController],
  providers: [MemberLoginSessionLogService],
  exports: [TypeOrmModule.forFeature([MemberLoginSessionLog])],
})
export class MemberLoginSessionLogModule {}
