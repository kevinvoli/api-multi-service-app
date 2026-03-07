import { Module } from '@nestjs/common';
import { GopayOtpLogs } from './entities/gopay-otp-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GopayOtpLogsService } from './gopay-otp-logs.service';
import { GopayOtpLogsController } from './gopay-otp-logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GopayOtpLogs])],
  controllers: [GopayOtpLogsController],
  providers: [GopayOtpLogsService],
  exports: [TypeOrmModule.forFeature([GopayOtpLogs])],
})
export class GopayOtpLogsModule {}
