import { Module } from '@nestjs/common';
import { AppLaunchinfoService } from './app-launchinfo.service';
import { AppLaunchinfoController } from './app-launchinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppLaunchInfo } from './entities/app-launchinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppLaunchInfo])],
  controllers: [AppLaunchinfoController],
  providers: [AppLaunchinfoService],
})
export class AppLaunchinfoModule {}