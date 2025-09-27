import { Module } from '@nestjs/common';
import { GopayOtpLogsService } from './gopay-otp-logs.service';
import { GopayOtpLogsController } from './gopay-otp-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GopayOtpLogs } from './entities/gopay-otp-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GopayOtpLogs])],
  controllers: [GopayOtpLogsController],
  providers: [GopayOtpLogsService],
})
export class GopayOtpLogsModule {}