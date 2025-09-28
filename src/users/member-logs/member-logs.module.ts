import { Module } from '@nestjs/common';
import { MemberLogsService } from './member-logs.service';
import { MemberLogsController } from './member-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberLog } from './entities/member-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberLog])],
  controllers: [MemberLogsController],
  providers: [MemberLogsService],
})
export class MemberLogsModule {}
