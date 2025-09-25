import { Module } from '@nestjs/common';
import { SetupInfoService } from './setup-info.service';
import { SetupInfoController } from './setup-info.controller';

@Module({
  controllers: [SetupInfoController],
  providers: [SetupInfoService],
})
export class SetupInfoModule {}
