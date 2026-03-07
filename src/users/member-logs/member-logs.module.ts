import { Module } from '@nestjs/common';
import { MemberLog } from './entities/member-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberLogsService } from './member-logs.service';
import { MemberLogsController } from './member-logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MemberLog])],
  controllers: [MemberLogsController],
  providers: [MemberLogsService],
  exports: [TypeOrmModule.forFeature([MemberLog])],
})
export class MemberLogsModule {}
