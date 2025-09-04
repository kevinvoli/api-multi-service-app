import { Module } from '@nestjs/common';
import { GopayOtpLogsService } from './gopay-otp-logs.service';
import { GopayOtpLogsController } from './gopay-otp-logs.controller';

@Module({
  controllers: [GopayOtpLogsController],
  providers: [GopayOtpLogsService],
})
export class GopayOtpLogsModule {}
