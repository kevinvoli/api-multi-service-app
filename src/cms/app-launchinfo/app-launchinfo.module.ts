import { Module } from '@nestjs/common';
import { AppLaunchinfoService } from './app-launchinfo.service';
import { AppLaunchinfoController } from './app-launchinfo.controller';

@Module({
  controllers: [AppLaunchinfoController],
  providers: [AppLaunchinfoService],
})
export class AppLaunchinfoModule {}
