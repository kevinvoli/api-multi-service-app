import { Module } from '@nestjs/common';
import { AppScreenMasterService } from './app-screen-master.service';
import { AppScreenMasterController } from './app-screen-master.controller';

@Module({
  controllers: [AppScreenMasterController],
  providers: [AppScreenMasterService],
})
export class AppScreenMasterModule {}
