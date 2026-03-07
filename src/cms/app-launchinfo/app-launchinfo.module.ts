import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppLaunchinfoService } from './app-launchinfo.service';
import { AppLaunchinfoController } from './app-launchinfo.controller';

import { AppLaunchInfo } from './entities/app-launchinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppLaunchInfo])],
  controllers: [AppLaunchinfoController],
  providers: [AppLaunchinfoService],
  exports: [TypeOrmModule.forFeature([AppLaunchInfo])],
})
export class AppLaunchinfoModule {}
